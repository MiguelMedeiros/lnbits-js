import LNBits from '../src/index';

const init = async () => {
  // Config
  const { wallet } = LNBits({
    adminKey: 'd00265e7de5f44f59b2408d9f0564181',
    invoiceReadKey: '23e34be59d57408688a74500a3f24f03',
    endpoint: 'https://legend.lnbits.com', //default
  });

  const walletDetails = await wallet.walletDetails();
  console.log(walletDetails);

  const newInvoice = await wallet.createInvoice({
    amount: 10,
    memo: 'test',
    out: false,
  });
  console.log(newInvoice);

  const newPayInvoice = await wallet.payInvoice({
    bolt11: '',
    out: true,
  });
  console.log(newPayInvoice);

  const checkinvoice = await wallet.checkInvoice({
    payment_hash: newInvoice.payment_hash,
  });
  console.log(checkinvoice);
};
init();
