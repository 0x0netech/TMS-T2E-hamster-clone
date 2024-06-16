interface ComboCardProps {
  image: string;
  content: string;
}
const ComboCard: React.FC<ComboCardProps> = ({ image, content }) => {
  return (
    <div className="group w-full rounded-lg bg-gradient-to-b from-pink-50 to-indigo-600 pt-[1px] pr-[1px] pl-[1px]">
      <div className="group w-full rounded-lg transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] bg-[#272A30] p-2 h-[150px]">
        <div className="flex flex-row justify-center align-middle pt-2">
          <img src={image} alt="iamge" className="w-[70px] h-[70px]" />
        </div>
        <p className="text-sm md:text-lg text-white pt-4 ">{content}</p>
      </div>
    </div>
  );
};

export default ComboCard;
// bg-[#272A30]
