import LNBits from '../src/index';

const init = async () => {
  // Config
  const { userManager } = LNBits({
    adminKey: 'e84b3c3941cc4e51b1b859c8a95aad3f',
    invoiceReadKey: 'b9f390e3b08547458ca016ff5d1c5483',
    endpoint: 'https://legend.lnbits.com', //default
  });

  const users = await userManager.getUsers();
  console.log(users);

  const wallets = await userManager.getWallets({
    user_id: '355c5110bed24744bebb12aecf8fad14',
  });
  console.log(wallets);

  const tx = await userManager.getTransactions({
    wallet_id: '4a18ae4b204044069bd349a37ba0be1d',
  });
  console.log(tx);

  const user = await userManager.createUser({
    admin_id: '355c5110bed24744bebb12aecf8fad14',
    user_name: 'user',
    wallet_name: 'wallet',
  });
  console.log(user);

  const userDeleted = await userManager.deleteUser({
    user_id: 'b7cab6e3744347f2b6516510f5d40e9d',
  });
  console.log(userDeleted);

  const walletDeleted = await userManager.deleteWallet({
    wallet_id: '0d52c8a832f84f9b86bd993b985e6f10',
  });
  console.log(walletDeleted);

  const extension = await userManager.activeExtension({
    userid: '355c5110bed24744bebb12aecf8fad14',
    extension: 'usermanager',
    active: true,
  });
  console.log(extension);
};
init();
