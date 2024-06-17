interface TokenCardProps {
  image: string;
  content: string;
  value: string;
  revune: string;
}
const TokenCard: React.FC<TokenCardProps> = ({
  image,
  content,
  value,
  revune,
}) => {
  return (
    <div className="w-full rounded-3xl transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] bg-[#272A30] px-1 py-2 sm:py-3">
      <div className="flex">
        <div className="flex mx-auto my-auto">
          <img
            src={image}
            alt="iamge"
            className="w-14 h-14 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
          />
        </div>
        <div className="w-2/3">
          <p className="text-left text-white text-md sm:text-lg md:text-2xl">
            {content}
          </p>
          <p className="text-left text-gray-400 pt-2 sm:text-sm md:text-md text-[12px] lg:text-lg">
            Profile per hour
          </p>
          <div className="flex pt-2 max-[400px]:pt-0 items-center">
            <img
              src="image/dollar.png"
              alt="iamge"
              className="w-[20px] h-[20px] mt-[2px] max-[400px]:w-4 max-[400px]:h-4"
            />
            <p className="pl-2 text-white max-[400px]:text-[11px]">{value}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[3px] bg-slate-700 shadow-md rounded-md mx-auto my-auto mt-1 sm:mt-2">
        <div className="flex h-[2px] bg-slate-800 shadow-xl w-full" />
      </div>
      <div className="flex flex-row sm:mt-2 mt-1 divide-x divide-gray-700">
        <div className="w-1/4">
          <p className="text-white items-center">|v|</p>
        </div>
        <div className="flex items-center">
          <img
            src="image/dollar.png"
            alt="iamge"
            className="w-[20px] h-[20px] max-[400px]:w-4 max-[400px]:h-4 mt-[2px] ml-4 max-[400px]:ml-3"
          />
          <p className="pl-2 text-white max-[400px]:text-sm">{revune}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
