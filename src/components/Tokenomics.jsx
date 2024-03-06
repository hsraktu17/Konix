import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

 

ChartJS.register(ArcElement, Tooltip, Legend);

 

  const data = {

   

    datasets: [

      {

        label: '# of Votes',

        data: [80, 20],

        backgroundColor: [

          'rgba(59, 130, 246, 0.8)',

          'rgba(249, 168, 37, 0.8)',

        ],

        borderColor: [

          'rgba(59, 130, 246, 1)',

          'rgba(249, 168, 37, 1)',

        ],

        borderWidth: 1,

      },

    ],

  };

 

function Tokenomics() {

  return (

    <div className=''>

    <div className='p-7 bg-gray-50 rounded-lg  '>

        <div className='font-bold text-2xl'>Tokenomics</div>

        <div className='font-bold text-lg mt-4'>Initial Distribution</div>

        <div className='flex gap-3 my-auto mt-4 h-40 w-full '>

            <Doughnut data={data} />

            <div className='flex flex-col w-full  my-auto'>

            <div className='flex items-center'><span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span> Crowdsale investor: 80%</div>

            <div className='flex items-center'><span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span> Foundation: 20%</div>

 

            </div>

        </div>

       

 

       <div className=' text-slate-800 py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo adipisci vero distinctio deserunt assumenda repellendus aliquid praesentium? Molestiae, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facilis totam amet doloribus magni nesciunt. Fuga numquam maiores tempore molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae dolores, beatae recusandae qui natus reprehenderit ullam pariatur laudantium ipsam nulla, dolorem, exercitationem deserunt quis. Praesentium possimus illo itaque sit?</div>

      </div>

    </div>

  )

}

 

export default Tokenomics

 