import { useContext, useState } from 'react';
import {
  SwapContainer,
  SwapHeader,
  SwapTab,
  SwapTabItem,
  SwapControlList,
  SwapControlItem,
  TokenContainer,
  TokenItem,
  TokenValue,
  TokenButtonContainer,
  TokenSelect,
  TokenIcon,
  TokenDownIcon,
} from './Swap.styled';
import { ThemeContext } from '@src/context/useThemeContext';

export default function Swap() {
  const { themeConfig } = useContext(ThemeContext);

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SwapContainer>
      <SwapHeader>
        <SwapTab>
          <SwapTabItem
            className={selectedTab === 0 ? 'active' : ''}
            onClick={() => setSelectedTab(0)}
          >
            Trade
          </SwapTabItem>
          <SwapTabItem
            className={selectedTab === 1 ? 'active' : ''}
            onClick={() => setSelectedTab(1)}
          >
            Limit
          </SwapTabItem>
        </SwapTab>
        <SwapControlList>
          <SwapControlItem>
            <img src={themeConfig.images.swap.resetIcon} />
          </SwapControlItem>
          <SwapControlItem>
            <img src={themeConfig.images.swap.unlockedIcon} />
          </SwapControlItem>
          <SwapControlItem>
            <img src={themeConfig.images.swap.settingIcon} />
          </SwapControlItem>
        </SwapControlList>
      </SwapHeader>
      <TokenContainer>
        <TokenItem className="select">
          <span>FROM</span>
          <TokenSelect>
            <div>
              <TokenIcon src={themeConfig.images.accountAvatar} />
              <span>YEVE</span>
            </div>
            <TokenDownIcon src={themeConfig.images.upIcon} />
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
    </SwapContainer>
  );
}
