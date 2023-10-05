import axios, { AxiosError, AxiosInstance } from 'axios';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
  endpoint?: string;
}

interface Links {
  id: string;
  is_unique: boolean;
  k1: string;
  lnurl: string;
  max_withdrawable: number;
  min_withdrawable: number;
  number: number;
  open_time: number;
  title: string;
  unique_hash: string;
  used: number;
  uses: number;
  usescsv: string;
  wait_time: number;
  wallet: string;
}

export class LNBitsWithdrawClass {
  private adminKey = '';
  private invoiceReadKey = '';
  private endpoint = 'https://legend.lnbits.com';
  private api: AxiosInstance;

  constructor(params: LNBitsConfig) {
    this.adminKey = params.adminKey;
    this.invoiceReadKey = params.invoiceReadKey;
    this.endpoint = params.endpoint || this.endpoint;
    this.api = axios.create({
      baseURL: `${this.endpoint}/withdraw/api/v1`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getLinks = async (params?: { withdraw_id?: string }): Promise<Links[]> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    let url = '/links';
    if (params?.withdraw_id) {
      url = `/links/${params?.withdraw_id}`;
    }
    return await this.api
      .get(url)
      .then((res: { data: Links[] }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  createLink = async (params: {
    title: string;
    min_withdrawable: number;
    max_withdrawable: number;
    uses: number;
    wait_time: number;
    is_unique: boolean;
  }): Promise<Links> => {
    this.api.defaults.headers['X-Api-Key'] = this.adminKey;
    return await this.api
      .post(`/links`, params)
      .then((res: { data: Links }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  updateLink = async (params: {
    withdraw_id: string;
    title: string;
    min_withdrawable: number;
    max_withdrawable: number;
    uses: number;
    wait_time: number;
    is_unique: boolean;
  }): Promise<Links> => {
    this.api.defaults.headers['X-Api-Key'] = this.adminKey;
    return await this.api
      .put(`/links/${params.withdraw_id}`, params)
      .then((res: { data: Links }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  deleteLink = async (params: { withdraw_id: string }): Promise<boolean> => {
    this.api.defaults.headers['X-Api-Key'] = this.adminKey;
    return await this.api
      .delete(`/links/${params.withdraw_id}`)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };
}
