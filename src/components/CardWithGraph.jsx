import { useState, useEffect } from "react"
import axios from "axios"
import bitcoin from '../assets/bitcoin.png'
import up from '../assets/up.png'


function CardWithGraph(){
    const [bitcoinData,setBitcoinData] = useState(null)

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
        .then(response => setBitcoinData(response.data.bitcoin))
        .catch(error => {
            console.log('error',error)
        })
    },[])

    let number = bitcoinData.usd_24h_change

    return <div className="bg-gray-50">
        <div className="p-10  flex">
            <img src={bitcoin} alt=""  className="h-10 "/>
            <p className="text-3xl flex">&nbsp; Bitcoin <p className="font-mono text-gray-500"> &nbsp;BTC &nbsp;</p></p>
            <div className="bg-gray-400 text-white text-md rounded-lg p-2">
                Rank #1
            </div>
        </div>
        <div className=" px-11 flex">
            <div className="text-3xl">
                ${bitcoinData.usd} &nbsp;
            </div>
            <div className="bg-green-100 flex text-green-600 text-xl rounded-md">
                <img src={up} alt="" className="h-7"/>
                
                {number.toFixed(2)}%
                
            </div>
            <p className="text-gray-500">&nbsp;&nbsp;(24H)</p>
        </div>
        <div className="px-11 text-xl">
            ₹ {bitcoinData.inr}
        </div>
        <hr/>
    </div>
}

export default CardWithGraph