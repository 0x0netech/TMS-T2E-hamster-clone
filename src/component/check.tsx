import React from "react";

interface CheckComProps {
  flag: boolean;
}

const CheckCom: React.FC<CheckComProps> = ({ flag }) => {
  return (
    <>
      <div className=" bg-slate-600 w-8 h-8 rounded-full flex items-center justify-center">
        {flag === true ? (
          <img src="image/check.png" className="w-6 h-6" />
        ) : (
          <div className=" bg-slate-700 w-6 h-6 rounded-full" />
        )}
      </div>
    </>
  );
};
export default CheckCom;
