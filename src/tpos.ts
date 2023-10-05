import axios, { AxiosError, AxiosInstance } from 'axios';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
  endpoint?: string;
}

interface TPoS {
  currency: string;
  id: string;
  name: string;
  wallet: string;
}

export class LNBitsTPoSClass {
  private adminKey = '';
  private invoiceReadKey = '';
  private endpoint = 'https://legend.lnbits.com';
  private api: AxiosInstance;

  constructor(params: LNBitsConfig) {
    this.adminKey = params.adminKey;
    this.invoiceReadKey = params.invoiceReadKey;
    this.endpoint = params.endpoint || this.endpoint;
    this.api = axios.create({
      baseURL: `${this.endpoint}/tpos/api/v1`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getTPoS = async (): Promise<TPoS[]> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .get(`/tposs`)
      .then((res: { data: TPoS[] }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  createTPoS = async (params: {
    name: string;
    currency: string;
  }): Promise<TPoS> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .post(`/tposs`, params)
      .then((res: { data: TPoS }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  deleteTPoS = async (params: { tpos_id: string }): Promise<boolean> => {
    this.api.defaults.headers['X-Api-Key'] = this.adminKey;
    return await this.api
      .delete(`/tposs/${params.tpos_id}`)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };
}
