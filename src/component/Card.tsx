import React from "react";

interface ExpCardProps {
  earn: string;
  // color: string;
  profit: string;
  flag: boolean;
}

const ExpCard: React.FC<ExpCardProps> = ({ earn, profit, flag }) => {
  return (
    <div className="grid grid-col-2 w-1/3  grid-col-1 px-[2px]">
      <div className="group w-full rounded-lg bg-[#272A30] py-2 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3]">
        <p className="text-sm max-sm:text-[12px] md:text-lg text-[#F39E09]">
          {earn}
        </p>
        <div className="flex flex-row justify-center align-middle pt-2">
          <p className="text-white text-2xl">
            {flag ? (
              <img
                src="/image/dollar.png"
                alt=""
                className="w-6 h-6 max-sm:w-4 max-sm:h-4"
              />
            ) : (
              <></>
            )}
          </p>
          <p className="text-white max-sm:text-[10px] text-md">
            &nbsp;{profit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
