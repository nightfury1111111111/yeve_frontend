import yeveImage from '@src/assets/images/png/token-1.png';
import tetherImage from '@src/assets/images/png/token-2.png';
import SwitchIcon from '@src/assets/images/svg/swap/SwitchIcon';
import { useState } from 'react';
import { SwapPrice, SwitchIconContainer } from './SelectToken.styled';
import SelectTokenItem from './SelectTokenItem';

type SelectTokenProps = {
  themeConfig: Record<string, any>;
};

export default function SelectToken({ themeConfig }: SelectTokenProps) {
  const [fromToken, setFromToken] = useState({
    address: '1',
    name: 'YEVE',
    symbol: 'YEVE',
    image: yeveImage,
    balance: 10.2,
  });

  const [toToken, setToToken] = useState({
    address: '1',
    name: 'Tether',
    symbol: 'USDT',
    image: tetherImage,
    balance: 10.2,
  });

  const handleSwitchToken = () => {
    const from = JSON.parse(JSON.stringify(fromToken));
    setFromToken(toToken);
    setToToken(from);
  };

  return (
    <>
      <SelectTokenItem
        themeConfig={themeConfig}
        buttonMax={true}
        token={fromToken}
        setToken={setFromToken}
      />
      <SwitchIconContainer>
        <div onClick={handleSwitchToken}>
          <SwitchIcon />
        </div>
        <SwapPrice>
          <label>Price</label>
          <span>1 YEVE = 24.233 USDT</span>
        </SwapPrice>
      </SwitchIconContainer>
      <SelectTokenItem
        themeConfig={themeConfig}
        token={toToken}
        setToken={setToToken}
      />
    </>
  );
}
