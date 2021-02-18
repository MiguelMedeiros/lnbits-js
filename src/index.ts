import { LNBitsWalletClass } from './wallet';
import { LNBitsUserManagerClass } from './usermanager';
import { LNBitsPaywallClass } from './paywall';
import { LNBitsWithdrawClass } from './withdraw';
import { LNBitsPaylinkClass } from './paylink';
import { LNBitsTPoSClass } from './tpos';

interface LNBitsConfig {
  adminKey: string;
  invoiceReadKey: string;
  endpoint?: string;
}

export default (
  params: LNBitsConfig
): {
  wallet: LNBitsWalletClass;
  userManager: LNBitsUserManagerClass;
  paywall: LNBitsPaywallClass;
  withdraw: LNBitsWithdrawClass;
  paylink: LNBitsPaylinkClass;
  tpos: LNBitsTPoSClass;
} => {
  return {
    wallet: new LNBitsWalletClass(params),
    userManager: new LNBitsUserManagerClass(params),
    paywall: new LNBitsPaywallClass(params),
    withdraw: new LNBitsWithdrawClass(params),
    paylink: new LNBitsPaylinkClass(params),
    tpos: new LNBitsTPoSClass(params),
  };
};
