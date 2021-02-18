import LNBits from '../src/index';

const init = async () => {
  // Config
  const { paylink } = LNBits({
    adminKey: 'e84b3c3941cc4e51b1b859c8a95aad3f',
    invoiceReadKey: 'b9f390e3b08547458ca016ff5d1c5483',
    endpoint: 'https://lnbits.cosm', //default
  });

  const paylinks = await paylink.getLinks();
  console.log(paylinks);

  const link = await paylink.getLink({
    pay_id: '82',
  });
  console.log(link);

  const paylinkNew = await paylink.createPayLink({
    description: 'description',
    amount: 100,
    comment_chars: 100,
    min: 1,
    max: 10,
  });
  console.log(paylinkNew);

  const paylinkUpdated = await paylink.updatePayLink({
    pay_id: 85,
    description: 'description updated',
    amount: 120,
    comment_chars: 100,
    min: 2,
    max: 100,
  });
  console.log(paylinkUpdated);

  const paylinkDeleted = await paylink.deletePayLink({
    pay_id: 85,
  });
  console.log(paylinkDeleted);
};
init();
