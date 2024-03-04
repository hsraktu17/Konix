import logo from '../assets/logo.svg';

function Navbar() {
    return (
        <nav className='flex justify-between p-4 md:p-7 lg:p-8 drop-shadow-md bg-gray-50'>
            <div className='flex items-center'>
                <img src={logo} alt="" className='h-8 md:h-10'/>
            </div>
            <div className='hidden md:flex items-center'>
                <div className='mr-8'>Crypto Tax</div>
                <div className='mr-8'>Free Tools</div>
                <div className='mr-8'>Resource Center</div>
                <button className='bg-blue-500 rounded-lg text-white px-6 py-2'>Get Started</button>
            </div>
            <div className='md:hidden flex items-center'>
                <button className='bg-blue-500 rounded-lg text-white px-4 py-2'>Menu</button>
            </div>
        </nav>
    );
}

export default Navbar;