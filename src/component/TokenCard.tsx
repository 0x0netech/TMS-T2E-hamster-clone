interface TokenCardProps {
  image: string;
  content: string;
  value: string;
}
const TokenCard: React.FC<TokenCardProps> = ({ image, content, value }) => {
  return (
    <div className="group w-full rounded-lg transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] bg-[#272A30] h-[150px]">
      <div className="flex grid-cols-2 p-2">
        <div className="mx-auto my-auto min-w-16">
          <img src={image} alt="iamge" className="w-[60px] h-[60px]" />
        </div>
        <div className="w-full pl-2 sm:pl-4">
          <p className="text-left text-white">Fan tokens</p>
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
      <p className="text-sm md:text-lg text-white pt-4 ">{content}</p>
    </div>
  );
};

export default TokenCard;
