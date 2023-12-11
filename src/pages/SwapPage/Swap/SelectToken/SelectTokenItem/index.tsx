import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import {
  TokenButtonContainer,
  TokenContainer,
  TokenIcon,
  TokenItem,
  TokenSelect,
  TokenValue
} from '../SelectToken.styled';

type SelectTokenItemProps = {
  themeConfig: Record<string, any>;
};

export default function SelectTokenItem({ themeConfig }: SelectTokenItemProps) {
  return (
    <TokenContainer>
      <TokenItem className="select">
        <span>FROM</span>
        <TokenSelect>
          <div>
            <TokenIcon src={themeConfig.images.accountAvatar} />
            <span>YEVE</span>
          </div>
          <DownIcon />
        </TokenSelect>
      </TokenItem>
      <TokenItem>
        <label>Amount</label>
        <TokenValue>48.38572</TokenValue>
      </TokenItem>
      <TokenItem>
        <label>Balance</label>
        <TokenButtonContainer>
          <label>18.7685</label>
          <button>MAX</button>
        </TokenButtonContainer>
      </TokenItem>
    </TokenContainer>
  );
}
