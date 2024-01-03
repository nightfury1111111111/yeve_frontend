import WalletIcon from '@src/assets/images/svg/wallet-icon';
import { AccountContainer, ConnectButton, Network } from './Account.styled';

type AccountProps = {
  themeConfig: Record<string, any>;
};
export default function Account({ themeConfig }: AccountProps) {
  const handleConnectWallet = () => {

  }

  
  return (
    <AccountContainer>
      <Network>
        <img src={themeConfig.images.solanaLogo} />
        <span>SOLANA</span>
      </Network>
      {/* <AccountInfo>
        <img src={themeConfig.images.accountAvatar} />
        <span>0x12...282723f1</span>
      </AccountInfo>
       */}
       <ConnectButton onClick={handleConnectWallet}>
        <WalletIcon />
        <span>Connect wallet</span>
       </ConnectButton>
    </AccountContainer>
  );
}
