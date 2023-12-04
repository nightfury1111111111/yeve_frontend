import { AccountContainer, SelectToken, AccountInfo } from './Account.styled';

type AccountProps = {
  themeConfig: Record<string, any>;
};
export default function Account({ themeConfig }: AccountProps) {
  return (
    <AccountContainer>
      <SelectToken>
        <img src={themeConfig.images.solanaLogo} />
        <span>SOLANA</span>
      </SelectToken>
      <AccountInfo>
        <img src={themeConfig.images.accountAvatar} />
        <span>0x12...282723f1</span>
      </AccountInfo>
    </AccountContainer>
  );
}
