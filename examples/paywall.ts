import LNBits from '../src/index';

const init = async () => {
  const { paywall } = LNBits({
    adminKey: 'e84b3c3941cc4e51b1b859c8a95aad3f',
    invoiceReadKey: 'b9f390e3b08547458ca016ff5d1c5483',
    endpoint: 'https://legend.lnbits.com', //default
  });

  const paywalls = await paywall.getPaywalls();
  console.log(paywalls);

  const paywallNew = await paywall.createPaywall({
    amount: 10,
    description: 'teste',
    memo: 'teste memo',
    remembers: false,
    url: 'https://teste.com',
  });
  console.log(paywallNew);

  const invoice = await paywall.createInvoice({
    amount: 10,
    paywall_id: '3UWoiHV7SYCytUjMfG8ySq',
  });
  console.log(invoice);

  const invoiceCheck = await paywall.checkInvoice({
    paywall_id: '3UWoiHV7SYCytUjMfG8ySq',
    payment_hash:
      'e73dc54e857823b7c0bdd3faf6c0f6e8af2b07556fdc304cc8fe7c692a2562e8',
  });
  console.log(invoiceCheck);

  const paywallDeleted = await paywall.deletePaywall({
    paywall_id: '3UWoiHV7SYCytUjMfG8ySq',
  });
  console.log(paywallDeleted);
};
init();
