/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AnaylsisCard from "../component/section/AnalysisCard";
import DailyCard from "../component/DailyCard";
import TimeText from "../component/TimeText";
import "react-toastify/dist/ReactToastify.css";
import ComboCard from "../component/ComboCard";
import Markets from "../component/section/Markets";
import { useState } from "react";
// import CountDate from "../component/CountDate";
// import ProgressBar from "../component/ProgressBar";
// import { useSelector } from "../store";
//import { insertWallet, updateWallet } from "../store/reducers/wallet";
function Mine() {
  // const tokenState = useSelector((state) => state.wallet.user?.balance);
  //const energyState = useSelector((state) => state.wallet.user?.energy);
  // const [imgStatus, setImgStatus] = useState(false);
  /*useEffect(() => {
    if (address) {
      dispatch(insertWallet(address));
    }
  }, []);*/
  //useEffect(() => {
  //setToken(tokenState);
  //setRemainedEnergy(energyState);
  //}, [tokenState, energyState, address]);
  // const [token, setToken] = useState<number>(tokenState);
  // const [remainedEnergy, setRemainedEnergy] = useState<number>(1000);
  function formatNumberWithCommas(number: number, locale = "en-US") {
    return new Intl.NumberFormat(locale).format(number);
  }
  // const bodyRef = useRef<HTMLDivElement>(null);
  // const [score, setScore] = useState<string>("+1");
  // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const x = Math.random() * (event.clientX - rect.left);
  //   const y = Math.random() * (event.clientY - rect.top);

  //   const styleElement = document.createElement("style");
  //   document.head.appendChild(styleElement);

  //   styleElement.sheet &&
  //     styleElement.sheet.insertRule(
  //       "@keyframes fade-out-top-right {0% {opacity: 1; transform: translateY(0); } 100% {opacity: 0;transform: translateY(-100%);}}",
  //       0
  //     );

  //   const newDiv = document.createElement("div");
  //   newDiv.textContent = `${score}`;
  //   // newDiv.style.backgroundImage = "url('image/dollar.png')";
  //   newDiv.style.backgroundRepeat = "no-repeat";
  //   newDiv.style.backgroundPosition = "center";
  //   newDiv.style.fontSize = "30px";
  //   newDiv.style.paddingLeft = "30px";
  //   newDiv.style.display = "flex";
  //   newDiv.style.justifyContent = "center";
  //   newDiv.style.alignItems = "center";
  //   newDiv.style.backgroundSize = "cover";
  //   newDiv.style.width = "40px";
  //   newDiv.style.height = "140px";
  //   newDiv.style.position = "absolute";
  //   newDiv.style.left = `${x + 50}px`;
  //   newDiv.style.top = `${y}px`;
  //   newDiv.style.color = score == "+1" ? "#58E1E2" : "red";
  //   newDiv.className =
  //     "dynamic-div animate-fadeouttopright transform max-sm:text-3xl text-5xl font-bold transition not-selectable";

  //   bodyRef.current && bodyRef.current.appendChild(newDiv);
  //   const interval = setTimeout(() => newDiv && newDiv.remove(), 1000);

  //   return () => clearTimeout(interval);
  // };

  // useEffect(() => {
  //   const webapp = (window as any).Telegram?.WebApp.initDataUnsafe;
  //   console.log("=========>webapp", webapp);
  //   const interval = setInterval(() => {
  //     setRemainedEnergy((pre) =>
  //       pre == 999 ? 1000 : pre < 1000 ? pre + 1 : 1000
  //     );
  //   }, 21600);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleTap = (event: React.MouseEvent<HTMLDivElement>) => {
  //   //if (!address) {
  //   //  toast.error("Please connect your wallet first");
  //   //  return;
  //   //}
  //   if (remainedEnergy > 0) {
  //     if (remainedEnergy < 500) {
  //       setScore("+2");
  //       setToken(token + 2);
  //       //dispatch(updateWallet(address, token + 2, remainedEnergy - 1));
  //     } else {
  //       setScore("+1");
  //       setToken(token + 1);
  //       //dispatch(updateWallet(address, token + 1, remainedEnergy - 1));
  //     }
  //     setRemainedEnergy(remainedEnergy - 1);
  //     handleClick(event);
  //   }
  // };

  // const handleMouseDown = () => {
  //   setImgStatus(true);
  // };
  // const handleMouseLeave = () => {
  //   setImgStatus(false);
  // };
  // console.log("imgStatus", imgStatus);
  const [tab, setTab] = useState<number>(1);
  return (
    <div className=" mt-12 px-4">
      <ToastContainer />
      <AnaylsisCard />
      <div
        id="mainWindow"
        className="relative mt-2 flex flex-col items-center justify-center w-full"
      >
        <div className="flex flex-col justify-center items-center mb-7 gap-2 w-full">
          <div className="flex flex-row justify-center items-center mt-4">
            <img src="/image/dollar.png" alt="" className="w-14 h-14 mt-1" />
            <h1 className="text-5xl text-white ml-3 font-bold">
              {formatNumberWithCommas(680432)}
            </h1>
          </div>
          <TimeText />
          <DailyCard />
          <div className="grid grid-cols-3 w-full py-4 gap-4">
            <ComboCard image="/image/com_3.png" content="Top 10 pairs" />
            <ComboCard image="/image/mikeT.png" content="Security Audition" />
            <ComboCard image="/image/com_1.png" content="Licence Ethiopia" />
          </div>
          <div className="grid grid-cols-4 gap-10 max-sm:gap-2 justify-center items-center bg-[#272A30] py-2 px-4 max-sm:px-2 rounded-xl w-full">
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
                  ? "scale-[110%] opacity-100 bg-[#1B1F24] max-sm:p-1 p-2 rounded-lg"
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
          {/* <div className="w-full">
            <ProgressBar value={remainedEnergy / 10} />
          </div> */}
        </div>
        {/* <div>
          <div
            className={`relative bg-[url('/image/mikeToken.png')] rounded-full bg-cover w-[400px] h-[400px] max-sm:w-[330px] max-sm:h-[330px] z-10 ${
              remainedEnergy > 0
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            } ${imgStatus ? " border-[5px]" : "border-0"}`}
            ref={bodyRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeave}
            onClick={handleTap}
          />
        </div>
        <div className="flex flex-row justify-between w-full px-10">
          <div className="flex justify-between gap-5 w-full">
            <h3 className="text-2xl mb-2 text-white flex flex-row">
              <span className="text-3xl ">
                <img
                  src="/image/icon/lightning.svg"
                  alt="lightning"
                  className="w-6 h-6 inline"
                />
              </span>
              <span className="text-2xl text-white">{remainedEnergy}</span>{" "}
              /1000
            </h3>
            <div className="flex justify-center align-middle">
              <Link to="/boost" className="flex">
                <img
                  src="/image/rocket.png"
                  alt="rocket"
                  className="w-8 h-8 inline"
                />
                <h3 className="text-2xl text-white">Boost</h3>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Mine;
