import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins.slice(0, 3)); // Limit to top 3 trending coins
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="container mx-auto py-8 bg-gray-50 rounded-xl gap-y-10"> {/* Add bg-gray-200 for background color */}
      <h1 className="text-3xl font-semibold mb-4">Trending Coins(24h)</h1>
      <div className="grid grid-rows-3 gap-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex  items-center">
            <img
              src={coin.item.large}
              alt={`${coin.item.name} logo`}
              className="w-20 h-20 rounded-full"
            />
            <span className="mt-2">{coin.item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
