import ResetIcon from '@src/assets/images/svg/swap/resetIcon';
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
import LockIcon from '@src/assets/images/svg/swap/LockIcon';
import SettingIcon from '@src/assets/images/svg/swap/SettingIcon';

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
            Swap
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
            <LockIcon />
          </SwapControlItem>
          <SwapControlItem>
            <SettingIcon />
          </SwapControlItem>
        </SwapControlList>
      </SwapHeader>
      <SelectToken themeConfig={themeConfig} />
      <Summary />
      <SwapButton>Swap</SwapButton>
    </SwapContainer>
  );
}
