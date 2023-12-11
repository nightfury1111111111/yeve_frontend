// TradingViewWidget.jsx

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

export default function TradingViewWidget() {
  return (
    <AdvancedRealTimeChart
      theme="dark"
      autosize
      symbol="ETH/CRYPTOCAP:USDT"
      timezone="Etc/UTC"
      interval="30"
      save_image={true}
      hide_legend={true}
      allow_symbol_change={true}
      hide_side_toolbar={false}
      enable_publishing={true}
      range="ALL"
    ></AdvancedRealTimeChart>
  );
}
