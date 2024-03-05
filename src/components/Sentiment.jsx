import { FaNewspaper } from "react-icons/fa6";
import newspaper from '../assets/newspaper.png'
import grow from '../assets/grow.png'

function Sentiment(){
    return (
        <div className="bg-gray-50 px-4 rounded-2xl">
            <p className="text-3xl font-semibold">Sentiment</p>
            <p className="text-2xl font-semibold">Key Event</p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="bg-green-200 rounded-xl p-4 flex gap-2 items-center">
                    <img src={newspaper} alt="" className="rounded-full h-16 w-16"/>
                    <div className="flex-1">
                        <p className="font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas dicta modi, fuga dolores sunt nisi aut, distinctio voluptatum doloremque consequatur. Magni velit molestiae a aliquid quia, inventore ducimus? Autem.</p>
                    </div>
                </div>
                <div className="bg-green-200 rounded-xl p-4 flex gap-2 items-center">
                    <img src={grow} alt="" className="rounded-full h-16 w-16"/>
                    <div className="flex-1">
                        <p className="font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas dicta modi, fuga dolores sunt nisi aut, distinctio voluptatum doloremque consequatur. Magni velit molestiae a aliquid quia, inventore ducimus? Autem.</p>
                    </div>
                </div>
            </div>
            <div>
              <br/>
              <p className="text-2xl text-gray-600 font-semibold ">Analyst Estimates</p>
              <div className="flex items-center gap-4">
                <div className="box-content h-32 w-32 p-4 border-4 bg-green-200 rounded-full flex items-center justify-center">
                    <div className="text-4xl text-green-600 font-bold">
                        76%
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <p className="text-gray-500">Buy</p>  
                        <div className="h-4 w-96 bg-green-500 rounded-full"></div>
                        <p className="text-gray-500">&nbsp;76%</p>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        <p className="text-gray-500">Hold</p>  
                        <div className="h-4 w-12 bg-gray-300 rounded-full"></div>
                        <p className="text-gray-500">&nbsp;8%</p>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        <p className="text-gray-500">Sell</p>  
                        <div className="h-4 w-40 bg-red-500 rounded-full"></div>
                        <p className="text-gray-500">&nbsp;16%</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Sentiment;
