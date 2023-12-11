import { useState } from 'react';
import {
  ButtonControl,
  ChartContainer,
  ChartHeading,
  Heading,
  InfoPrice,
  InfoWrap,
  TokenWrap,
  TradingViewRange,
  TradingViewRangeItem,
  ChartWrap,
} from './Chart.styled';
import TradingViewWidget from './TradingView';
import yeveImage from '@src/assets/images/png/token-1.png';
import tetherImage from '@src/assets/images/png/token-2.png';
import { TRADING_VIEW_RANGE } from '@src/example-data/chart';
import TradingViewRangeType from '@src/types/TradingView';

export default function Chart() {
  const [chartMode, setChartMode] = useState('PRO');
  const [tradingViewRange, setTradingViewRange] =
    useState<TradingViewRangeType>('ALL');

  return (
    <ChartContainer>
      <ChartHeading>
        <Heading>
          <TokenWrap>
            <img src={yeveImage} />
            <img src={tetherImage} />
            <span>YEVE/USDT</span>
          </TokenWrap>
          <ButtonControl>
            <button
              className={chartMode === 'BASIC' ? 'active' : ''}
              onClick={() => setChartMode('BASIC')}
            >
              Basic
            </button>
            <button
              className={chartMode === 'PRO' ? 'active' : ''}
              onClick={() => setChartMode('PRO')}
            >
              Pro
            </button>
          </ButtonControl>
        </Heading>

        <InfoWrap>
          <InfoPrice>
            <div>2.7101 USDT</div>
            <label>0.00123138461 (0.92%)</label>
          </InfoPrice>
          <TradingViewRange>
            {TRADING_VIEW_RANGE.map((range) => (
              <TradingViewRangeItem
                key={range}
                className={tradingViewRange === range ? 'active' : ''}
                onClick={() => setTradingViewRange(range)}
              >
                {range}
              </TradingViewRangeItem>
            ))}
          </TradingViewRange>
        </InfoWrap>
      </ChartHeading>

      <ChartWrap>
        <TradingViewWidget range={tradingViewRange} />
      </ChartWrap>
    </ChartContainer>
  );
}
