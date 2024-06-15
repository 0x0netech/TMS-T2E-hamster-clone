import React from "react";

interface ExpCardProps {
  earn: string;
  color: string;
  profit: string;
  flag: boolean;
}

const ExpCard: React.FC<ExpCardProps> = ({ earn, color, profit, flag }) => {
  return (
    <div className="grid grid-col-2 w-1/3  grid-col-1 px-1">
      <div className="group w-full rounded-lg bg-[#272A30] p-2 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3]">
        <p className={`text-sm md:text-lg text-[${color}]`}>{earn}</p>
        <div className="flex flex-row justify-center align-middle pt-2">
          <p className="text-white text-2xl">
            {flag ? (
              <img src="/image/dollar.png" alt="" className="w-6 h-6" />
            ) : (
              <></>
            )}
          </p>
          <p className="text-white text-md">&nbsp;{profit}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
