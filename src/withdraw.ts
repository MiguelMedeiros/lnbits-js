import axios, { AxiosInstance, AxiosError } from 'axios';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
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
  private api: AxiosInstance;

  constructor(params: LNBitsConfig) {
    this.adminKey = params.adminKey;
    this.invoiceReadKey = params.invoiceReadKey;
    this.api = axios.create({
      baseURL: 'https://lnbits.com/withdraw/api/v1',
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
      .catch((err: { response: { data: { message: string } } }) => {
        throw err.response.data.message;
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
      .catch((err: { response: { data: { message: string } } }) => {
        throw err.response.data.message;
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
      .catch((err: { response: { data: { message: string } } }) => {
        throw err.response.data.message;
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
