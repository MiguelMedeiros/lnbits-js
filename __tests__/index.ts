import { createTypeReferenceDirectiveResolutionCache } from 'typescript';
import lnbits from '../lib/index';

describe('tests wallet', () => {

    const instance = lnbits({
        invoiceReadKey:'3c86664d1bb6477a9b2ef1fae889fbbf',
        adminKey:'98fd89f578ae40e8b0a5006c6c3dffed',
        endpoint:'https://legend.lnbits.com',
    });
    
    test('testing wallet details', async () => {

        const walletDetails = await instance.wallet.walletDetails()

        expect(typeof walletDetails.name).toBe('string');  
        expect(typeof walletDetails.id).toBe('string');  
        expect(typeof walletDetails.balance).toBe('number');  
    })

        test('testing create invoice',async ()=>{
            const invoice = await instance.wallet.createInvoice({amount: 10,memo: 'description', out: false});
            expect(typeof invoice.checking_id).toBe('string');
            expect (typeof invoice.lnurl_response).toBe('string');
            expect(typeof invoice.payment_hash).toBe('string');
            expect(typeof invoice.payment_request).toBe('string');

        }
    
    )
})