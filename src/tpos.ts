import axios, { AxiosInstance, AxiosError } from 'axios';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
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
  private api: AxiosInstance;

  constructor(params: LNBitsConfig) {
    this.adminKey = params.adminKey;
    this.invoiceReadKey = params.invoiceReadKey;
    this.api = axios.create({
      baseURL: 'https://lnbits.com/tpos/api/v1',
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
      .catch((err: { response: { data: { message: string } } }) => {
        throw err.response.data.message;
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
      .catch((err: { response: { data: { message: string } } }) => {
        throw err.response.data.message;
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
