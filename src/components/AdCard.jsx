import table from '../assets/table.png'

function AdCard() {
    return (
      <div className="bg-blue-500 container mx-auto text-white text-center rounded-3xl py-10 px-6">
        <p className="text-4xl mb-4">Get Started with KoinX for free</p>
        <p className="mb-4">With our wide range of features that you can use for free, KoinX allows you to be more educated and aware of tax reports.</p>
        <img src={table} alt="" />
        <button className="bg-white text-black px-4 py-2 rounded-lg">Get Started for FREE</button>
      </div>
    );
  }
  
  export default AdCard;
  