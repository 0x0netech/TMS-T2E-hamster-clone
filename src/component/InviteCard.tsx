interface InviteCardProps {
  title: string;
  profit: string;
}
const InviteCard: React.FC<InviteCardProps> = ({ title, profit }) => {
  return (
    <div className="grid grid-col-1  grid-col-1 w-full">
      <div className="group rounded-xl bg-[#272A30] py-4 px-2 sm:p-3 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] flex justify-between">
        <div className="flex grid-cols-2 gap-3 max-sm:gap-1">
          <img
            src="/image/gift.png"
            alt=""
            className="w-16 h-14 max-sm:w-10 max-sm:h-9"
          />
          <div className=" space-y-3">
            <p className="text-white text-lg font-semibold text-left">
              {title}
            </p>
            <div className="flex">
              <img src="/image/dot.png" alt="" className="w-4 h-4 mt-1" />
              <img
                src="/image/dollar.png"
                alt=""
                className="w-6 h-6 max-sm:w-4 max-sm:h-4 mt-1"
              />
              <p className="text-orange-400">+{profit}</p>
              <p className="text-white text-left">&nbsp;for you and your friend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteCard;
