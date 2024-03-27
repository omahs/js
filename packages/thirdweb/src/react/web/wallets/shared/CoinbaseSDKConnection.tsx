import type { Wallet } from "../../../../wallets/interfaces/wallet.js";
import type { WalletInfo } from "../../../../wallets/wallet-info.js";
import { useWalletConnectionCtx } from "../../../core/hooks/others/useWalletConnectionCtx.js";

import type { InjectedWalletLocale } from "../injected/locale/types.js";

import { useState, useRef, useEffect, useCallback } from "react";
import { ScanScreen } from "./ScanScreen.js";

/**
 * @internal
 */
function CoinbaseSDKWalletConnectUI(props: {
  onBack?: () => void;
  onGetStarted: () => void;
  done: () => void;
  locale: InjectedWalletLocale;
  wallet: Wallet<"com.coinbase.wallet">;
  walletInfo: WalletInfo;
}) {
  const { onBack, done, wallet, walletInfo, onGetStarted, locale } = props;
  const [qrCodeUri, setQrCodeUri] = useState<string | undefined>();
  const { chain } = useWalletConnectionCtx();

  const connect = useCallback(() => {
    wallet
      .connect({
        chain,
        onUri: (uri) => {
          setQrCodeUri(uri);
        },
        headlessMode: true,
        reloadOnDisconnect: false,
      })
      .then(() => {
        done();
      })
      .catch((e) => {
        console.error(e);
      });
  }, [wallet, chain, done]);

  const scanStarted = useRef(false);
  useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);

  return (
    <ScanScreen
      qrScanInstruction={locale.scanScreen.instruction}
      onBack={onBack}
      onGetStarted={onGetStarted}
      qrCodeUri={qrCodeUri}
      walletName={walletInfo.name}
      walletId="com.coinbase.wallet"
      getStartedLink={locale.getStartedLink}
    />
  );
}

export default CoinbaseSDKWalletConnectUI;
