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
    <div className="grid grid-cols-5 gap-5 justify-center items-center bg-[#272A30] p-4 rounded-xl mt-16">
      <Link
        to=""
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/"
            ? "scale-[110%] opacity-100 bg-[#1B1F24] p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img src="/image/mining.png" alt="play" className="w-8 h-8" />
        <p className="text-sm max-sm:text-[10px] text-white">Exchange</p>
      </Link>
      <Link
        to="/mine"
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/mine"
            ? "scale-[110%] opacity-100 bg-[#1B1F24] p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img src="/image/axs.png" alt="play" className="w-8 h-8" />
        <p className="text-sm max-sm:text-[10px] text-white">Mine</p>
      </Link>
      <Link
        to=""
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/friends"
            ? "scale-[110%] opacity-100 bg-[#1B1F24] p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <img src="/image/friends.png" alt="play" className="w-8 h-8" />
        <p className="text-sm max-sm:text-[10px] text-white">Friends</p>
      </Link>
      <Link
        to="/quest"
        className={`flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition ${
          path === "/quest"
            ? "scale-[110%] opacity-100  bg-[#1B1F24] p-2 rounded-2xl"
            : "opacity-50 text-white"
        }`}
      >
        <p className="text-sm max-sm:text-[10px] text-white">Earn</p>
      </Link>
    </div>
  );
}
