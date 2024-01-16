import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
  AccountContainer,
  AccountInfo,
  ConnectButtonWrap,
  SolanaContainer,
} from './Account.styled';

type AccountProps = {
  themeConfig: Record<string, any>;
};
export default function Account({ themeConfig }: AccountProps) {
  const renderWalletButton = () => {
    return (
      <ConnectButtonWrap>
        <WalletMultiButton className="bg-secondary hover:bg-[#15539a]" />
      </ConnectButtonWrap>
    );
  };

  return (
    <AccountContainer>
      <SolanaContainer>
        <img src={themeConfig.images.solanaLogo} />
        <span>SOLANA</span>
      </SolanaContainer>
      <AccountInfo>
        {/* <img src={themeConfig.images.accountAvatar} /> */}
        {renderWalletButton()}
      </AccountInfo>
    </AccountContainer>
  );
}
