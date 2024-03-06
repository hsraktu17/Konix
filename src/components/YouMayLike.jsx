import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoinCarousel = ({ coins }) => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="mx-4">
      {coins.map((coin, index) => (
        <div key={index} className="coin-container bg-white p-4 rounded-lg">
          <div className="coin-card flex flex-col items-center">
            <img src={coin.image} alt={coin.name} className="h-16 w-16 rounded-full mb-4" />
            <h2 className="text-lg font-semibold">{coin.name}</h2>
            <p className="text-sm text-gray-600">{coin.symbol.toUpperCase()}</p>
            <p className="text-lg font-bold">Price: ${coin.current_price}</p>
            <p className={`text-sm ${coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const YouMayLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [youMayLikeCoins, setYouMayLikeCoins] = useState([]);

  useEffect(() => {
    // Fetch data for trending coins
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        setTrendingCoins(data);
      })
      .catch(error => console.error('Error fetching trending coins:', error));

    // Fetch data for "You May Like" coins
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=2&sparkline=false')
      .then(response => response.json())
      .then(data => {
        setYouMayLikeCoins(data);
      })
      .catch(error => console.error('Error fetching "You May Like" coins:', error));
  }, []);

  return (
    <div className="container mx-auto bg-gray-50 py-8">
      <h1 className="text-3xl font-bold mb-4">Trending Coins</h1>
      <CoinCarousel coins={trendingCoins} />
      <h1 className="text-3xl font-bold my-4">You May Like</h1>
      <CoinCarousel coins={youMayLikeCoins} />
    </div>
  );
};

export default YouMayLike;
