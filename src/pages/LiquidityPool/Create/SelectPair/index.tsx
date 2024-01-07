import yeveImage from '@src/assets/images/png/token-1.png';
import tetherImage from '@src/assets/images/png/token-2.png';
import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import SwapIcon from '@src/assets/images/svg/pools/swap-icon';
import { useState } from 'react';
import { SelectPair, SelectPairItem } from '../CreateLiquidityPool';
import TokenModal from './TokenModal';

export default function SelectPairElements() {
  const [fromToken, setFromToken] = useState<Record<string, any>>({
    address: '1',
    name: 'YEVE',
    symbol: 'YEVE',
    image: yeveImage,
    balance: 10.2,
  });

  const [toToken, setToToken] = useState<Record<string, any>>({
    address: '1',
    name: 'Tether',
    symbol: 'USDT',
    image: tetherImage,
    balance: 10.2,
  });

  const [tokenModalMode, setTokenModalMode] = useState<string>('');

  const handleSwitchToken = () => {
    const from = JSON.parse(JSON.stringify(fromToken));
    setFromToken(toToken);
    setToToken(from);
  };

  const handleTokenChange = (data: Record<string, any>) => {
    if (tokenModalMode === 'from') {
      setFromToken(data);
    } else if (tokenModalMode === 'to') {
      setToToken(data);
    }
    setTokenModalMode('');
  };

  return (
    <SelectPair>
      {tokenModalMode && (
        <TokenModal
          onClose={() => setTokenModalMode('')}
          handleSelect={handleTokenChange}
        />
      )}
      <SelectPairItem onClick={() => setTokenModalMode('from')}>
        <div>
          <img src={fromToken?.image} />
          <span>{fromToken?.symbol}</span>
        </div>
        <DownIcon />
      </SelectPairItem>
      <div className="swap-icon" onClick={handleSwitchToken}>
        <SwapIcon />
      </div>
      <SelectPairItem onClick={() => setTokenModalMode('to')}>
        <div>
          <img src={toToken?.image} />
          <span>{toToken?.symbol}</span>
        </div>
        <DownIcon />
      </SelectPairItem>
    </SelectPair>
  );
}
