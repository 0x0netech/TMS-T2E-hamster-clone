import { ToastContainer } from "react-toastify";
import AnaylsisCard from "../component/section/AnalysisCard";
import DailyCard from "../component/DailyCard";
import TimeText from "../component/TimeText";
import "react-toastify/dist/ReactToastify.css";
import ComboCard from "../component/ComboCard";
import Markets from "../component/section/Markets";
import { useState } from "react";
function Mine() {
  function formatNumberWithCommas(number: number, locale = "en-US") {
    return new Intl.NumberFormat(locale).format(number);
  }
  const [tab, setTab] = useState<number>(1);
  return (
    <div className="mt-12 px-4 pb-24">
      <ToastContainer />
      <AnaylsisCard />
      <div
        id="mainWindow"
        className="relative mt-2 flex flex-col items-center justify-center w-full"
      >
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <div className="flex flex-row justify-center items-center mt-4">
            <img src="/image/dollar.png" alt="" className="w-14 h-14 mt-1" />
            <h1 className="text-5xl text-white ml-3 font-bold">
              {formatNumberWithCommas(680432)}
            </h1>
          </div>
          <TimeText />
          <DailyCard />
          <div className="grid grid-cols-3 w-full pt-4 gap-2">
            <ComboCard image="/image/com_3.png" content="Top 10 pairs" />
            <ComboCard image="/image/mikeT.png" content="Security Audition" />
            <ComboCard image="/image/com_1.png" content="Licence Ethiopia" />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-10 justify-center items-center bg-[#272A30] py-2 px-4 rounded-xl w-full sticky top-2 z-50 border-[#1B1F24] border-2">
            <div
              className={` cursor-pointer transform origin-bottom transition ${
                tab === 1
                  ? "scale-[110%] opacity-100 bg-[#1B1F24] p-2 max-sm:p-1 rounded-lg"
                  : "opacity-50 text-white"
              }`}
              onClick={() => setTab(1)}
            >
              <p className="text-sm text-white">Markets</p>
            </div>
            <div
              className={`cursor-pointer transform origin-bottom transition ${
                tab === 2
                  ? "scale-[110%] opacity-100 bg-[#1B1F24] sm:p-2 p-2 rounded-lg"
                  : "opacity-50 text-white"
              }`}
              onClick={() => setTab(2)}
            >
              <p className="text-sm max-sm:text-[11px]  text-white">PR&Team</p>
            </div>
            <div
              className={` cursor-pointer transform origin-bottom transition ${
                tab === 3
                  ? "scale-[110%] opacity-100 bg-[#1B1F24] max-sm:p-1 p-2 rounded-lg"
                  : "opacity-50 text-white"
              }`}
              onClick={() => setTab(3)}
            >
              <p className="text-sm  text-white">Legal</p>
            </div>
            <div
              className={` cursor-pointer transform origin-bottom transition ${
                tab === 4
                  ? "scale-[110%] opacity-100  bg-[#1B1F24] max-sm:p-1 p-2 rounded-lg"
                  : "opacity-50 text-white"
              }`}
              onClick={() => setTab(4)}
            >
              <p className="text-sm  text-white">Specials</p>
            </div>
          </div>
          <div className="w-full">{tab === 1 && <Markets />}</div>
        </div>
      </div>
    </div>
  );
}

export default Mine;
