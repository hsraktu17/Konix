import Navbar from "./components/Navbar";
import CardWithGraph from "./components/CardWithGraph";
import AdCard from "./components/AdCard";
import TrendingCoins from "./components/TrendingCoins";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <p className="px-4 sm:px-8 py-3">Cryptocurrency &gt;&gt; Bitcoin</p>
      <div className="grid grid-cols-1 gap-4 p-4 md:p-7">
        {/* Show mobile layout */}
        <div className="md:hidden">
          <CardWithGraph />
          <Performance />
          <Sentiment />
          <AdCard />
          <TrendingCoins />
        </div>
        {/* Show normal layout */}
        <div className="hidden md:block">
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="col-span-2">
              <CardWithGraph />
            </div>
            <AdCard />
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="col-span-2">
            <Performance />
            </div>
            <TrendingCoins />
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="col-span-2">
            <Sentiment />
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-gray-50 container mx-auto rounded-3xl"></div>
    </div>
  );
}

export default App;
