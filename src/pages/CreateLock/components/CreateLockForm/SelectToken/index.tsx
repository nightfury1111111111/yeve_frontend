import yeveImage from '@src/assets/images/png/token-1.png';
import { useState } from 'react';
import {
  AmountLockContainer,
  SwapTab,
  SwapTabItem,
} from '../CreateLockForm.styled';
import SelectTokenItem from './SelectTokenItem';

type SelectTokenProps = {
  themeConfig: Record<string, any>;
};

export default function SelectToken({ themeConfig }: SelectTokenProps) {
  const [selectedTab, setSelectedTab] = useState('25%');

  const [fromToken, setFromToken] = useState<Record<string, any>>({
    address: '1',
    name: 'YEVE',
    symbol: 'YEVE',
    image: yeveImage,
    balance: 10.2,
  });

  return (
    <>
      <AmountLockContainer>
        <div>Amount to lock</div>
        <SwapTab>
          <SwapTabItem
            className={selectedTab === '25%' ? 'active' : ''}
            onClick={() => setSelectedTab('25%')}
          >
            25%
          </SwapTabItem>
          <SwapTabItem
            className={selectedTab === '50%' ? 'active' : ''}
            onClick={() => setSelectedTab('50%')}
          >
            50%
          </SwapTabItem>
          <SwapTabItem
            className={selectedTab === '75%' ? 'active' : ''}
            onClick={() => setSelectedTab('75%')}
          >
            75%
          </SwapTabItem>
          <SwapTabItem
            className={selectedTab === 'MAX' ? 'active' : ''}
            onClick={() => setSelectedTab('MAX')}
          >
            MAX
          </SwapTabItem>
        </SwapTab>
      </AmountLockContainer>

      <SelectTokenItem
        themeConfig={themeConfig}
        token={fromToken}
        setToken={setFromToken}
      />
      <div>Lock Duration</div>
    </>
  );
}
