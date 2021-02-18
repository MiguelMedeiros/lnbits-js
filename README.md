# **LNBits JS API**

[![npm version](https://img.shields.io/npm/v/lnbits.svg?style=flat-square)](https://www.npmjs.org/package/lnbits)
[![NPM](https://img.shields.io/david/MiguelMedeiros/lnbits-js.svg?style=flat-square)](https://david-dm.org/MiguelMedeiros/lnbits-js#info=dependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/MiguelMedeiros/lnbits-js/badge.svg?style=flat-square)](https://snyk.io/test/github/MiguelMedeiros/lnbits-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

Easy way to add LNBits API to your JS application.

---

## **References**

- LNBits Website: [https://lnbits.com](https://lnbits.com)
- LNBits Telegram Group: [https://t.me/lnbits](https://t.me/lnbits)

---

## **Donate**

Help me to stack sats! :blush:

[bc1qg2sm9tjqy35j50g0zf27s0e8fhflrame5d7q3s](bitcoin:bc1qg2sm9tjqy35j50g0zf27s0e8fhflrame5d7q3s)

[Or donate via Lightning Network!](https://paywall.link/to/lnbits)

---

## **Features**

- [References](#references)
- [Donate](#donate)
- [Instalation](#installation)
- [Usage](#usage)
  - [Initial Configuration](#initial-config)
  - [Wallet](#wallet)
    - [Wallet Details](#wallet-details)
    - [Create Invoice](#create-invoice)
    - [Pay Invoice](#pay-invoice)
    - [Check Invoice](#check-invoice)
  - [User Manager](#user-manager)
    - [Get Users](#get-users)
    - [Get Wallets](#get-wallets)
    - [Get Transactions](#get-transactions)
    - [Create User](#create-user)
    - [Delete User](#delete-user)
    - [Delete Wallet](#delete-wallet)
    - [Active Extension](#active-extension)
  - [Paywall](#paywall)
    - [Get Paywalls](#get-paywalls)
    - [Create Paywall](#create-paywall)
    - [Create Invoice](#create-invoice)
    - [Check Invoice](#check-invoice)
    - [Delete Paywall](#delete-paywall)
  - [Withdraw](#withdraw)
    - [Get Links](#get-links)
    - [Create Link](#create-link)
    - [Update Link](#update-link)
    - [Delete Link](#delete-link)
  - [TPoS](#tpos)
    - [Get TPoS](#get-tpos)
    - [Create Link](#create-tpos)
    - [Delete Link](#delete-tpos)
- [Contribute](#contribute)
- [License](#license)

---

## **Installation**

Using npm:

```bash
$ npm install lnbits
```

Using yarn:

```bash
$ yarn add lnbits
```

---

## **Usage**

### **Initial Configuration**

```javascript
const LNBits = require('lnbits').default; // using require

import LNBits from 'lnbits'; // using import

const { wallet, userManager, paywall, withdraw, paylink, tpos } = LNBits({
  adminKey: 'd00265e7de5f44f59b2408d9f0564181',
  invoiceReadKey: '23e34be59d57408688a74500a3f24f03',
  endpoint: 'https://lnbits.com', //default
});
```

<br/>

### **Wallet**

### **Wallet Details**

[ [Example](examples/wallet.ts) ] [ [top](#donate) ]

```js
const walletDetails = await wallet.walletDetails();
console.log(walletDetails);
```

<br/>

### **Create Invoice**

[ [Example](examples/wallet.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {number} params.amount
- {string} params.memo
- {boolean} params.out

```js
const newInvoice = await wallet.createInvoice({
  amount: 10,
  memo: 'test',
  out: false,
});
console.log(newInvoice);
```

<br/>

### **Pay Invoice**

[ [Example](examples/wallet.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.bolt11
- {boolean} params.out

```js
const newPayInvoice = await wallet.payInvoice({
  bolt11: '',
  out: true,
});
console.log(newPayInvoice);
```

<br/>

### **Check Invoice**

[ [Example](examples/wallet.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.payment_hash

```js
const checkinvoice = await wallet.checkInvoice({
  payment_hash: '...',
});
console.log(checkinvoice);
```

<br/>

### **User Manager**

### **Get Users**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

```js
const users = await userManager.getUsers();
console.log(users);
```

<br/>

### **Get Wallets**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.user_id

```js
const wallets = await userManager.getWallets({
  user_id: '355c5110bed24744bebb12aecf8fad14',
});
console.log(wallets);
```

<br/>

### **Get Transactions**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.wallet_id

```js
const tx = await userManager.getTransactions({
  wallet_id: '4a18ae4b204044069bd349a37ba0be1d',
});
console.log(tx);
```

<br/>

### **Create User**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.admin_id
- {string} params.user_name
- {string} params.wallet_name

```js
const user = await userManager.createUser({
  admin_id: '355c5110bed24744bebb12aecf8fad14',
  user_name: 'user',
  wallet_name: 'wallet',
});
console.log(user);
```

<br/>

### **Delete User**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.user_id

```js
const userDeleted = await userManager.deleteUser({
  user_id: 'b7cab6e3744347f2b6516510f5d40e9d',
});
console.log(userDeleted);
```

<br/>

### **Delete Wallet**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.wallet_id

```js
const walletDeleted = await userManager.deleteWallet({
  wallet_id: '0d52c8a832f84f9b86bd993b985e6f10',
});
console.log(walletDeleted);
```

<br/>

### **Active Extension**

[ [Example](examples/userManager.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.userid
- {string} params.extension
- {boolean} params.active

```js
const extension = await userManager.activeExtension({
  userid: '355c5110bed24744bebb12aecf8fad14',
  extension: 'usermanager',
  active: true,
});
console.log(extension);
```

<br/>

### **Paywall**

### **Get Paywalls**

[ [Example](examples/paywall.ts) ] [ [top](#donate) ]

```js
const paywalls = await paywall.getPaywalls();
console.log(paywalls);
```

<br/>

### **Create Paywall**

[ [Example](examples/paywall.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {number} params.amount
- {string} params.description
- {string} params.memo
- {boolean} params.remembers
- {string} params.url

```js
const paywallNew = await paywall.createPaywall({
  amount: 10,
  description: 'teste',
  memo: 'teste memo',
  remembers: false,
  url: 'https://teste.com',
});
console.log(paywallNew);
```

<br/>

### **Create Invoice**

[ [Example](examples/paywall.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {number} params.amount
- {string} params.paywall_id

```js
const invoice = await paywall.createInvoice({
  amount: 10,
  paywall_id: '3UWoiHV7SYCytUjMfG8ySq',
});
console.log(invoice);
```

<br/>

### **Check Invoice**

[ [Example](examples/paywall.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.paywall_id
- {string} params.payment_hash

```js
const invoiceCheck = await paywall.checkInvoice({
  paywall_id: '3UWoiHV7SYCytUjMfG8ySq',
  payment_hash:
    'e73dc54e857823b7c0bdd3faf6c0f6e8af2b07556fdc304cc8fe7c692a2562e8',
});
console.log(invoiceCheck);
```

<br/>

### **Delete Paywall**

[ [Example](examples/paywall.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.paywall_id

```js
const paywallDeleted = await paywall.deletePaywall({
  paywall_id: '3UWoiHV7SYCytUjMfG8ySq',
});
console.log(paywallDeleted);
```

<br/>

### **Withdraw**

### **Get Links**

[ [Example](examples/withdraw.ts) ] [ [top](#donate) ]

```js
const withdrawLinks = await withdraw.getLinks({
  withdraw_id: '5o57EM9Qty5CLQB2QNjQ2p',
});
console.log(withdrawLinks);
```

<br/>

### **Create Link**

[ [Example](examples/withdraw.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.title
- {number} params.min_withdrawable
- {number} params.max_withdrawable
- {number} params.uses
- {number} params.wait_time
- {boolean} params.is_unique

```js
const link = await withdraw.createLink({
  title: 'title',
  min_withdrawable: 10,
  max_withdrawable: 20,
  uses: 10,
  wait_time: 3600,
  is_unique: false,
});
console.log(link);
```

<br/>

### **Update Link**

[ [Example](examples/withdraw.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.withdraw_id
- {string} params.title
- {number} params.min_withdrawable
- {number} params.max_withdrawable
- {number} params.uses
- {number} params.wait_time
- {boolean} params.is_unique

```js
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
```

<br/>

### **Delete Link**

[ [Example](examples/withdraw.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.withdraw_id

```js
const linkDeleted = await withdraw.deleteLink({
  withdraw_id: 'aaWVY3cu655xHxJpYLJhcA',
});
console.log(linkDeleted);
```

<br/>

### **TPoS**

### **Get TPoS**

[ [Example](examples/tpos.ts) ] [ [top](#donate) ]

```js
const tposs = await tpos.getTPoS();
console.log(tposs);
```

<br/>

### **Create TPoS**

[ [Example](examples/tpos.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.currency
- {string} params.name

```js
const tposNew = await tpos.createTPoS({
  currency: 'usd',
  name: 'teste tpos',
});
console.log(tposNew);
```

<br/>

### **Delete TPoS**

[ [Example](examples/tpos.ts) ] [ [top](#donate) ]

Parameters:

- {Object} params - Params object.
- {string} params.tpos_id

```js
const tposDeleted = await tpos.deleteTPoS({
  tpos_id: 'PCXNcLsoLSaBhUybxHfoCN',
});
console.log(tposDeleted);
```

---

## **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## **License [MIT](https://choosealicense.com/licenses/mit/)**
