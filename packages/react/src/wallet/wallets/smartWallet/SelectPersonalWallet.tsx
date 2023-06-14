import { walletIds } from "@thirdweb-dev/wallets";
import { Img } from "../../../components/Img";
import { Spacer } from "../../../components/Spacer";
import { Flex } from "../../../components/basic";
import { Button } from "../../../components/buttons";
import {
  BackButton,
  ModalTitle,
  ModalDescription,
  HelperLink,
} from "../../../components/modalElements";
import { iconSize, spacing } from "../../../design-system";
import { WalletSelection } from "../../ConnectWallet/WalletSelector";
import styled from "@emotion/styled";
import { SmartWalletConfig } from "./types";
import { WalletConfig } from "@thirdweb-dev/react-core";

export const SelectPersonalWallet: React.FC<{
  onBack: () => void;
  smartWallet: SmartWalletConfig;
  personalWallets: WalletConfig[];
  selectWallet: (wallet: WalletConfig) => void;
  renderBackButton?: boolean;
}> = (props) => {
  const guestWallet = props.personalWallets.find(
    (w) => w.id === walletIds.localWallet,
  );

  const personalWallets = props.personalWallets.filter(
    (w) => w.id !== walletIds.localWallet,
  );

  return (
    <>
      {props.renderBackButton && <BackButton onClick={props.onBack} />}
      <IconContainer>
        <Img
          src={props.smartWallet.meta.iconURL}
          width={iconSize.xl}
          height={iconSize.xl}
        />
      </IconContainer>
      <Spacer y="lg" />
      <ModalTitle>Link Personal Wallet</ModalTitle>
      <Spacer y="sm" />

      <ModalDescription>
        Select a personal wallet to access your account.{" "}
        <HelperLink
          md
          href="https://portal.thirdweb.com/wallet/smart-wallet"
          target="_blank"
          style={{
            display: "inline",
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          Learn More{" "}
        </HelperLink>
      </ModalDescription>

      <Spacer y="lg" />

      <WalletSelection
        walletConfigs={personalWallets}
        selectWallet={props.selectWallet}
      />

      {guestWallet && (
        <>
          <Spacer y="xl" />
          <Flex justifyContent="center">
            <Button
              variant="link"
              onClick={() => {
                props.selectWallet(guestWallet);
              }}
              data-test="continue-as-guest-button"
            >
              Continue as guest
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

const IconContainer = styled.div`
  margin-top: ${spacing.lg};
`;
