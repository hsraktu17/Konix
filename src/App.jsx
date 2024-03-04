import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import CardWithGraph from "./components/CardWithGraph";

function App(){
  
  return <div className="bg-gray-100">
    <Navbar />
    <div>
      <p className="px-10 py-3">Cryptocurrency &gt;&gt; Bitcoin</p>
      <CardWithGraph />
    </div>
  </div>
}

export default App;