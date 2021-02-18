import LNBits from '../src/index';

const init = async () => {
  const { tpos } = LNBits({
    adminKey: 'e84b3c3941cc4e51b1b859c8a95aad3f',
    invoiceReadKey: 'b9f390e3b08547458ca016ff5d1c5483',
  });

  const tposs = await tpos.getTPoS();
  console.log(tposs);

  const tposNew = await tpos.createTPoS({
    currency: 'usd',
    name: 'teste tpos',
  });
  console.log(tposNew);

  const tposDeleted = await tpos.deleteTPoS({
    tpos_id: 'PCXNcLsoLSaBhUybxHfoCN',
  });
  console.log(tposDeleted);
};
init();
