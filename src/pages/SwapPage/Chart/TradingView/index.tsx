// TradingViewWidget.jsx

import { ThemeContext } from '@src/context/useThemeContext';
import TradingViewRangeType from '@src/types/TradingView';
import { useContext } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

type TradingViewWidgetProps = {
  range: TradingViewRangeType;
};

export default function TradingViewWidget({ range }: TradingViewWidgetProps) {
  const { themeConfig } = useContext(ThemeContext);

  console.log(themeConfig.colors.gray['950'])

  return (
    <AdvancedRealTimeChart
      theme={themeConfig.mode}
      autosize
      symbol="ETH/CRYPTOCAP:USDT"
      timezone="Etc/UTC"
      interval="30"
      save_image={true}
      hide_legend={true}
      allow_symbol_change={true}
      hide_side_toolbar={false}
      enable_publishing={true}
      range={range}
    ></AdvancedRealTimeChart>
  );
}
