import SettingIcon from '@src/assets/images/svg/swap/SettingIcon';
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
import SlippageSetting from './SlippageSetting';

export default function Swap() {
  const { themeConfig } = useContext(ThemeContext);

  const [openSlippageSetting, setSlippageSetting] = useState(true);
  const [summary, setSummary] = useState<Record<string, any>>({
    slippage: '1.00',
  });

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SwapContainer>
      {openSlippageSetting && (
        <SlippageSetting
          summary={summary}
          onClose={() => setSlippageSetting(false)}
          handleSelect={setSummary}
        />
      )}

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
          <SwapControlItem onClick={() => setSlippageSetting(true)}>
            <SettingIcon />
          </SwapControlItem>
        </SwapControlList>
      </SwapHeader>
      <SelectToken themeConfig={themeConfig} />
      <Summary summary={summary} />
      <SwapButton>Swap</SwapButton>
    </SwapContainer>
  );
}
