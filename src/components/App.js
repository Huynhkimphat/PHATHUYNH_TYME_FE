import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import SubBanner from "./SubBanner";

function App() {
  return (
    <div className="bg-black text-white flex justify-center flex-col w-full">
      <Header />
      <Banner />
      <Main />
      <SubBanner />
      <Footer />
    </div>
  );
}

export default App;
