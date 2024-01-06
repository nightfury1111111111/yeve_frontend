import { AccountContainer, SelectToken, AccountInfo } from './Account.styled';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

type AccountProps = {
  themeConfig: Record<string, any>;
};
export default function Account({ themeConfig }: AccountProps) {
  const renderWalletButton = () => {
    return <WalletMultiButton className="bg-secondary hover:bg-[#15539a]" />;
  };

  return (
    <AccountContainer>
      <SelectToken>
        <img src={themeConfig.images.solanaLogo} />
        <span>SOLANA</span>
      </SelectToken>
      <AccountInfo>
        <img src={themeConfig.images.accountAvatar} />
        {renderWalletButton()}
      </AccountInfo>
    </AccountContainer>
  );
}
