import Navbar from "./components/Navbar";
import CardWithGraph from "./components/CardWithGraph";
import AdCard from "./components/AdCard";
import TrendingCoins from "./components/TrendingCoins";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import YouMayLike from "./components/YouMayLike";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <p className="px-4 sm:px-8 py-3">Cryptocurrency &gt;&gt; Bitcoin</p>
      <div className="grid grid-cols-1 gap-4 p-4 md:p-7">
        <div className="md:hidden">
          <CardWithGraph />
          <div className="mb-4"> {/* Add margin-bottom for gap */}
            <Performance />
          </div>
          <div className="mb-4"> {/* Add margin-bottom for gap */}
            <Sentiment />
          </div>
          <div className="mb-4"> {/* Add margin-bottom for gap */}
            <About />
          </div>
          <div className="mb-4"> {/* Add margin-bottom for gap */}
            <Tokenomics/>
          </div>
          <div className="mb-4"> {/* Add margin-bottom for gap */}
            <Team/>
          </div>
          <div className="mb-4"> {/* Add margin-bottom for gap */}
            <YouMayLike />
          </div>
          <AdCard />
          <TrendingCoins />
        </div>
        <div className="hidden md:block">
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <CardWithGraph />
            </div>
            <AdCard />
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <Performance />
            </div>
            <TrendingCoins />
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <Sentiment />
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <About />
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <Tokenomics />
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <Team />
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <YouMayLike />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 container mx-auto rounded-3xl"></div>
    </div>
  );
}

export default App;
