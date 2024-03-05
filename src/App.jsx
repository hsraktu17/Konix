import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import CardWithGraph from "./components/CardWithGraph";
import AdCard from "./components/AdCard";
import TrendingCoins from "./components/TrendingCoins";
import Performance from "./components/Performance";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <p className="px-10 py-3">Cryptocurrency &gt;&gt; Bitcoin</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-7">
        <div className="md:col-span-2">
          <CardWithGraph />
        </div>
        <div className="md:col-span-1">
          <div className="md:ml-auto"> {/* Move the TrendingCoins component to the right */}
            <AdCard />
          </div>
          <TrendingCoins />
        </div>
        <div className="md:col-span-2">
          <Performance />
        </div>
      </div>
      <div className="bg-gray-50 container mx-auto rounded-3xl">
          
        </div>
    </div>
  );
}

export default App;
