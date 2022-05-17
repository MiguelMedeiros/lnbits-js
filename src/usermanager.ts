import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
  endpoint?: string;
}

interface Users {
  admin: string;
  email: string;
  id: string;
  name: string;
  password: string;
}

export class LNBitsUserManagerClass {
  private invoiceReadKey = '';
  private endpoint = 'https://lnbits.com';
  private api: AxiosInstance;

  constructor(params: LNBitsConfig) {
    this.invoiceReadKey = params.invoiceReadKey;
    this.endpoint = params.endpoint || this.endpoint;
    this.api = axios.create({
      baseURL: `${this.endpoint}/usermanager/api/v1`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getUsers = async (): Promise<Users[]> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .get(`/users`)
      .then((res: { data: Users[] }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  getWallets = async (params?: { user_id?: string }): Promise<Users[]> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    let url = `/wallets`;
    if (params) {
      url = `/wallets/${params.user_id}`;
    }
    return await this.api
      .get(url)
      .then((res: { data: Users[] }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  getTransactions = async (params: { wallet_id: string }): Promise<Users[]> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .get(`/wallets/${params.wallet_id}`)
      .then((res: { data: Users[] }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  createUser = async (params: {
    admin_id: string;
    user_name: string;
    wallet_name: string;
  }): Promise<Users> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .post(`/users`, params)
      .then((res: { data: Users[] }) => {
        return res.data;
      })
      .catch((err: { response: { data: { message: string } } }) => {
        throw err.response.data.message;
      });
  };

  deleteUser = async (params: { user_id: string }): Promise<boolean> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .delete(`/users/${params.user_id}`)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };

  deleteWallet = async (params: { wallet_id: string }): Promise<boolean> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .delete(`/wallets/${params.wallet_id}`)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };

  activeExtension = async (params: {
    userid: string;
    extension: string;
    active: boolean;
  }): Promise<AxiosResponse> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .post(`/extensions`, params)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };
}
