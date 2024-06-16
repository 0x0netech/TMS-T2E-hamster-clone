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
    <div className="w-full rounded-lg transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] bg-[#272A30] h-[150px]">
      <div className="flex grid-cols-2 p-2">
        <div className="mx-auto my-auto min-w-16">
          <img src={image} alt="iamge" className="w-[60px] h-[60px]" />
        </div>
        <div className="w-full pl-2 sm:pl-4">
          <p className="text-left text-white">{content}</p>
          <p className="text-left text-gray-400 pt-2 text-sm">
            Profile per hour
          </p>
          <div className="flex pt-2">
            <img
              src="image/dollar.png"
              alt="iamge"
              className="w-[20px] h-[20px] mt-[2px]"
            />
            <p className="pl-2 text-white">{value}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[3px] bg-slate-700 shadow-md rounded-md mx-auto my-auto">
        <div className="flex h-[2px] bg-slate-800 shadow-xl w-full" />
      </div>
      <div className="flex flex-row mt-2 divide-x divide-gray-700">
        <div className="w-1/4">
          <p className="text-white items-center">|v|</p>
        </div>
        <div className="flex">
          <img
            src="image/dollar.png"
            alt="iamge"
            className="w-[20px] h-[20px] mt-[2px] ml-4"
          />
          <p className="pl-2 text-white">{revune}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
