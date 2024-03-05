import React from 'react';

function Performance() {
  return (
    <div className='bg-gray-50 container mx-auto rounded-lg px-4 py-8 md:px-0'>
      <div className='flex flex-start gap-6 text-lg s:full s:overflow-scroll s:overflow-y-hidden xl:w-11/12 px-4' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

        <div>Overview</div>

        <div>Fundamentals</div>  

        <div className='' ><span>NewInsights</span> </div>    

        <div>Sentiments</div>  

        <div>Team</div>  

        <div>Technicals</div>  

        <div>Tokenomics</div>  

      </div>
      <div className='px-4'>
        <p className='text-3xl font-bold '>Performance</p>
        <br/>
        <div className='flex w-full justify-between py-4 px-2'>

    <div>

        <p>Today's low</p>

        <p>46,930.22</p>

    </div>

    <div className='w-8/12  h-2 flex justify-center my-auto rounded-full overflow-hidden'>

        <div className="w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">

            <input

                type="range"

                min="0"

                max="100"

                value="45"

                className="w-full my-auto opacity-0 cursor-pointer"

            />

        </div>

    </div>

    <div>

        <p className='relative right-5'>Today's High</p>

        <p className='relative right-5'>49,343.83</p>

    </div>

</div>
<div className='flex w-full justify-between py-4 px-2'>

    <div>

        <p>52W low</p>

        <p>16,930.22</p>

    </div>

    <div className='w-8/12  h-2 flex justify-center my-auto rounded-full overflow-hidden'>

        <div className="w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">

            <input

                type="range"

                min="0"

                max="100"

                value="45"

                className="w-full my-auto opacity-0 cursor-pointer"

            />

        </div>

    </div>

    <div>

        <p className='relative right-5'>52W High</p>

        <p className='relative right-5'>46,743.83</p>

    </div>

</div>
      </div>
      <div className='mt-8 px-4'>
        <p className='text-2xl font-bold '>Fundamentals</p>
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
