import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./page/Home";
import Ranking from "./page/Ranking";
import Quest from "./page/Quest";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import Layout from "./Layout";
import Loading from "./component/Loading";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import Boost from "./page/Boost";
import Mine from "./page/Mine";
import Friends from "./page/Friends";
import Earn from "./page/Earn";
import Airdrop from "./page/AirDrop";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="App flex flex-col justify-between w-[700px] max-sm:w-[750px] bg-[#1B1F24] scroll-auto">
          <ReduxProvider store={store}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="ranking" element={<Ranking />} />
                <Route path="quest" element={<Quest />} />
                <Route path="boost" element={<Boost />} />
                <Route path="mine" element={<Mine />} />
                <Route path="friends" element={<Friends />} />
                <Route path="earn" element={<Earn />} />
                <Route path="airdrop" element={<Airdrop />} />
              </Route>
            </Routes>
            <ToastContainer />
              <Footer />
          </ReduxProvider>
        </div>
      )}
    </Router>
  );
}

export default App;
