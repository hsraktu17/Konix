import logo from '../assets/logo.svg'

function Navbar(){
    return (
        <nav className='flex justify-between p-7 drop-shadow-md bg-gray-50'>
            <div className='flex items-center'>
                <img src={logo} alt=""  className='h-10'/>
            </div>
            <div className='flex items-center'>
                <div className='mr-11'>Crypto Tax</div>
                <div className='mr-11'>Free Tools</div>
                <div className='mr-11'>Resource Center</div>
                <button className='bg-blue-500 rounded-lg text-white px-7 py-3'>Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar