import LNBits from '../src/index';

const init = async () => {
  const { withdraw } = LNBits({
    adminKey: 'e84b3c3941cc4e51b1b859c8a95aad3f',
    invoiceReadKey: 'b9f390e3b08547458ca016ff5d1c5483',
  });

  const withdrawLinks = await withdraw.getLinks({
    withdraw_id: '5o57EM9Qty5CLQB2QNjQ2p',
  });
  console.log(withdrawLinks);

  const link = await withdraw.createLink({
    title: 'title',
    min_withdrawable: 10,
    max_withdrawable: 20,
    uses: 10,
    wait_time: 3600,
    is_unique: false,
  });
  console.log(link);

  const linkUpdated = await withdraw.updateLink({
    withdraw_id: 'aaWVY3cu655xHxJpYLJhcA',
    title: 'title',
    min_withdrawable: 10,
    max_withdrawable: 20,
    uses: 10,
    wait_time: 3600,
    is_unique: false,
  });
  console.log(linkUpdated);

  const linkDeleted = await withdraw.deleteLink({
    withdraw_id: 'aaWVY3cu655xHxJpYLJhcA',
  });
  console.log(linkDeleted);
};
init();
