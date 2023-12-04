import { ThemeContext } from '@src/context/useThemeContext';
import { useContext, useState } from 'react';
import SelectToken from './SelectToken';
import Summary from './Summary';
import {
  SwapButton,
  SwapContainer,
  SwapControlItem,
  SwapControlList,
  SwapHeader,
  SwapTab,
  SwapTabItem,
} from './Swap.styled';
import ResetIcon from '@src/assets/images/svg/swap/resetIcon';
import SettingIcon from '@src/assets/images/svg/swap/settingIcon';
import UnlockedIcon from '@src/assets/images/svg/swap/unlockedIcon';

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
            <ResetIcon />
          </SwapControlItem>
          <SwapControlItem>
            <img src={themeConfig.images.swap.unlockedIcon} />
          </SwapControlItem>
          <SwapControlItem>
            <img src={themeConfig.images.swap.settingIcon} />
          </SwapControlItem>
        </SwapControlList>
      </SwapHeader>
      <SelectToken themeConfig={themeConfig} />
      <Summary />
      <SwapButton>Swap</SwapButton>
    </SwapContainer>
  );
}
