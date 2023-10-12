import lnbits from '../lib/index';

describe('tests wallet', () => {
    test('testing wallet details', async () => {
        const instance = lnbits({
            invoiceReadKey:'3c86664d1bb6477a9b2ef1fae889fbbf',
            adminKey:'98fd89f578ae40e8b0a5006c6c3dffed',
            endpoint:'https://legend.lnbits.com',
        });

        const walletDetails = await instance.wallet.walletDetails()

        expect(typeof walletDetails.name).toBe('string');  
        expect(typeof walletDetails.id).toBe('string');  
        expect(typeof walletDetails.balance).toBe('number');  
    })
})