import React, { useState, useEffect, useRef, memo } from 'react';
import axios from 'axios';
import bitcoin from '../assets/bitcoin.png';
import up from '../assets/up.png';

function CardWithGraph() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const container = useRef();

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
      .then(response => setBitcoinData(response.data.bitcoin))
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
    <div className="bg-gray-50 container mx-auto rounded-lg">
      <div className="p-10 flex">
        <img src={bitcoin} alt="" className="h-10" />
        <p className="text-3xl flex">&nbsp; Bitcoin <span className="font-mono text-gray-500">&nbsp;BTC&nbsp;</span></p>
        <div className="bg-gray-500 text-white text-md rounded-lg p-2 text-sm">Rank #1</div>
      </div>
      <div className="px-11 flex">
        {bitcoinData && (
          <>
            <div className="text-3xl">
              ${bitcoinData.usd}&nbsp;
            </div>
            <div className={`bg-${bitcoinData.usd_24h_change >= 0 ? 'green' : 'red'}-100 flex text-${bitcoinData.usd_24h_change >= 0 ? 'green' : 'red'}-600 text-xl rounded-md`}>
              <img src={up} alt="" className="h-7" />
              {bitcoinData.usd_24h_change ? `${bitcoinData.usd_24h_change.toFixed(2)}%` : '-'}
            </div>
            <p className="text-gray-500">&nbsp;&nbsp;(24H)</p>
          </>
        )}
      </div>
      <div className="px-11 text-xl">
        {bitcoinData ? `₹ ${bitcoinData.inr}` : '-'}
      </div>
      <hr />
      <div className='px-10 mx-auto'>
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
