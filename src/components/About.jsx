import mobile from '../assets/mobile.png';
import mobileLaptop from '../assets/mobileLaptop.png';

function About() {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 px-5">
      <p className="text-3xl font-bold">About Bitcoin</p>
      <br />
      <div>
        <p className="text-2xl font-bold">What is Bitcoin?</p>
        <p>
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <br />
        <hr />
        <br />
        <p className="text-2xl font-bold text-gray-700">Lorem ipsum dolor sit amet</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <br />
        <p className="text-gray-600">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
        </p>
        <br />
        <p className="text-gray-600">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <p className="text-3xl font-bold">Already Holding Bitcoin?</p>
        <div className='flex gap-6'>
          <div className="box-content h-64 w-1/3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center flex-col p-4">
            <div className="flex items-center">
              <img src={mobile} alt="" className='h-48 w-48 rounded-xl' />
              <div className="ml-4">
                <p className='text-white font-extrabold text-3xl'>Calculate your Profits</p>
                <button className='bg-white text-blue-500 font-bold py-2 px-4 rounded-xl'>Check Now</button>
              </div>
            </div>
          </div>
          <div className="box-content h-64 w-1/3 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl flex items-center justify-center flex-col p-4">
            <div className="flex items-center">
              <img src={mobileLaptop} alt="" className='h-48 w-48 rounded-xl' />
              <div className="ml-4">
                <p className='text-white font-extrabold text-3xl'>Calculate your Profits</p>
                <button className='bg-white text-blue-500 font-bold py-2 px-4 rounded-xl'>Check Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <hr />
      <br/>
      <div className='text-gray-500'>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </div>
    </div>
  );
}

export default About;
