import React, { useState, useEffect, useRef, memo } from 'react';
import bitcoin from '../assets/bitcoin.png';
import up from '../assets/up.png';

function CardWithGraph() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const container = useRef();

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin data');
        }
        return response.json();
      })
      .then(data => setBitcoinData(data.bitcoin))
      .catch(error => {
        console.log('Error fetching Bitcoin data:', error);
      });
  }, []);

  useEffect(() => {
    if (!bitcoinData) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "500",
        "symbol": "BITSTAMP:BTCUSD",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(63, 63, 63, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "range": "1M",
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, [bitcoinData]);

  return (
    <div className="bg-gray-50 container mx-auto rounded-lg p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row">
        <img src={bitcoin} alt="" className="h-10" />
        <div className="md:flex-grow">
          <p className="text-3xl mt-2 md:mt-0 ml-4 md:ml-8">&nbsp; Bitcoin <span className="font-mono text-gray-500">&nbsp;BTC&nbsp;</span></p>
          <div className="bg-gray-500 text-white text-md rounded-lg p-2">
          Rank #1
        </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
        <div className="text-3xl">{bitcoinData && `$${bitcoinData.usd}`}</div>
        <div className={`bg-${bitcoinData?.usd_24h_change >= 0 ? 'green' : 'red'}-100 flex text-${bitcoinData?.usd_24h_change >= 0 ? 'green' : 'red'}-600 text-xl rounded-md items-center mt-4 md:mt-0`}>
          <img src={up} alt="" className="h-7 ml-2" />
          {bitcoinData?.usd_24h_change ? `${bitcoinData.usd_24h_change.toFixed(2)}%` : '-'}
          <span className="text-gray-500">&nbsp;&nbsp;(24H)</span>
        </div>
      </div>
      <div className="text-xl mt-4 md:mt-8">{bitcoinData ? `₹ ${bitcoinData.inr}` : '-'}</div>
      <hr className="mt-4 md:mt-8" />
      <div className='mt-4 md:mt-8'>
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                <span className="blue-text">Track all markets on TradingView</span>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CardWithGraph);
