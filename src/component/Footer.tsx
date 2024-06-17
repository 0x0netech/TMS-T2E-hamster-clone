import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname); // Initialize state with current pathname
  useEffect(() => {
    // Update the state whenever the location changes
    setPath(location.pathname);
  }, [location]);
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-5 justify-center items-center bg-[#272A30] p-2 md:p-2 rounded-xl">
      <Link
        to=""
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/"
            ? "scale-[110%] opacity-100 bg-[#1B1F24] p-1 md:p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img
          src="/image/mining.png"
          alt="play"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="text-[10px] md:text-sm text-white">Exchange</p>
      </Link>
      <Link
        to="/mine"
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/mine"
            ? "scale-[110%] opacity-100 bg-[#1B1F24] p-1 md:p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img
          src="/image/axs.png"
          alt="play"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="text-[10px] md:text-sm text-white">Mine</p>
      </Link>
      <Link
        to="/friends"
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/friends"
            ? "scale-[110%] opacity-100 bg-[#1B1F24] p-1 md:p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img
          src="/image/friends.png"
          alt="play"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="text-[10px] md:text-sm text-white">Friends</p>
      </Link>
      <Link
        to="/earn"
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/earn"
            ? "scale-[110%] opacity-100  bg-[#1B1F24] p-1 md:p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img
          src="/image/earn.png"
          alt="ranking"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="text-[10px] md:text-sm text-white">Earn</p>
      </Link>
      <Link
        to="/airdrop"
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/airdrop"
            ? "scale-[110%] opacity-100  bg-[#1B1F24] p-1 md:p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img
          src="/image/hamstercoin.png"
          alt="quest"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="text-[10px] md:text-sm text-white">Airdrop</p>
      </Link>
    </div>
  );
}
