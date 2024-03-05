import React from 'react';

function Performance() {
  return (
    <div className='bg-gray-50 container mx-auto rounded-lg px-4 py-8 md:px-0'>
      <nav className="flex justify-between items-center h-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <ul className="flex flex-wrap space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16">
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Overview
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Fundamentals
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            News
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Insights
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Sentiments
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Technicals
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-blue-700">
            Tokenomics
          </a>
        </li>
      </ul>
    </nav>
      <div className='px-4'>
        <p className='text-3xl font-bold '>Performance</p>
        <br/>
        <div className='flex flex-row'>
          <p className='text-gray-500'>Today's Low</p>  
          <div className="h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
          <p className='text-gray-500'>Today's High</p>
        </div>
        <div className='grid grid-cols-2'>
          <p className='text-gray-500 justify-items-start'>46,930.22</p>
          <p className='text-gray-500 grid justify-items-end'>49,343.83</p>
        </div>
        <br/>
        <div className='flex flex-row'>
          <p className='text-gray-500'>52W Low &nbsp;</p>  
          <div className="h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
          <p className='text-gray-500'>52W High</p>
        </div>
        <div className='grid grid-cols-2'>
          <p className='text-gray-500 justify-items-start'>46,930.22</p>
          <p className='text-gray-500 grid justify-items-end'>49,343.83</p>
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-2xl font-bold'>Fundamentals</p>
        <table className='table-auto w-full mt-4'>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='text-gray-500 py-2'>Bitcoin</td>
              <td className='py-2'>$16,815.46</td>
              <td className='text-gray-500 py-2'>Market Cap</td>
              <td className='py-2'>$323,507,290,047</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='text-gray-500 py-2'>24h Low/24h High</td>
              <td className='py-2'>$16,382.46/$16,815.46</td>
              <td className='text-gray-500 py-2'>Market Cap Dominance</td>
              <td className='py-2'>38.343%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='text-gray-500 py-2'>7d Low/7d High</td>
              <td className='py-2'>$16,382.46/$16,815.46</td>
              <td className='text-gray-500 py-2'>Volume/Market Cap</td>
              <td className='py-2'>0.0718</td>
            </tr>
            <tr>
              <td className='text-gray-500 py-2'>Trading Volume</td>
              <td className='py-2'>$23,249,202,782</td>
              <td className='text-gray-500 py-2'>Market Cap Rank</td>
              <td className='py-2'>#1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Performance;
