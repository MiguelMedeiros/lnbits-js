import axios, { AxiosInstance, AxiosError } from 'axios';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
}

interface Paywalls {
  amount: number;
  description: string;
  extras: string;
  id: string;
  memo: string;
  remembers: boolean;
  time: number;
  url: string;
  wallet: string;
}

interface CreatePaywall {
  amount: number;
  description: string;
  extras: string;
  id: string;
  memo: string;
  remembers: boolean;
  time: number;
  url: string;
  wallet: string;
}

interface Invoice {
  payment_hash: string;
  payment_request: string;
}

interface InvoiceCheck {
  paid: string;
}

export class LNBitsPaywallClass {
  private adminKey = '';
  private invoiceReadKey = '';
  private api: AxiosInstance;

  constructor(params: LNBitsConfig) {
    this.adminKey = params.adminKey;
    this.invoiceReadKey = params.invoiceReadKey;
    this.api = axios.create({
      baseURL: 'https://lnbits.com/paywall/api/v1',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getPaywalls = async (): Promise<Paywalls[]> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .get(`/paywalls`)
      .then((res: { data: Paywalls[] }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  createPaywall = async (params: {
    amount: number;
    description: string;
    memo: string;
    remembers: boolean;
    url: string;
  }): Promise<CreatePaywall> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .post(`/paywalls`, params)
      .then((res: { data: CreatePaywall }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  createInvoice = async (params: {
    paywall_id: string;
    amount: number;
  }): Promise<Invoice> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .post(`/paywalls/${params.paywall_id}/invoice`, params)
      .then((res: { data: Invoice }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  checkInvoice = async (params: {
    paywall_id: string;
    payment_hash: string;
  }): Promise<InvoiceCheck> => {
    this.api.defaults.headers['X-Api-Key'] = this.invoiceReadKey;
    return await this.api
      .post(`/paywalls/${params.paywall_id}/check_invoice`, params)
      .then((res: { data: InvoiceCheck }) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        throw err;
      });
  };

  deletePaywall = async (params: { paywall_id: string }): Promise<boolean> => {
    this.api.defaults.headers['X-Api-Key'] = this.adminKey;
    return await this.api
      .delete(`/paywalls/${params.paywall_id}`)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };
}
