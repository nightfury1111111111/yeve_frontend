// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById('tradingview_00eed') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'ETH/CRYPTOCAP:USDT',
          interval: '30',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          enable_publishing: true,
          hide_legend: true,
          withdateranges: true,
          allow_symbol_change: true,
          save_image: false,
          hide_volume: true,
          container_id: 'tradingview_00eed',
        });
      }
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: '100%', width: '100%' }}
    >
      <div
        id="tradingview_00eed"
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      />
    </div>
  );
}
