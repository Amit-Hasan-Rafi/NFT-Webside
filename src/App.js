import './App.css';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import InfoSection from './Components/InfoSection/InfoSection';
import TopFold from './Components/TopFold/TopFold';
import TrendingNFT from './Components/TrendingNFT/TrendingNFT';

function App() {
  return (
    <div>
      <Header></Header>
      <TopFold></TopFold>
      <Brands></Brands>
      <TrendingNFT></TrendingNFT>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
