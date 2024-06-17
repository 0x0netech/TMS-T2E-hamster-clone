interface FriendCardProps {
  name: string;
  role: string;
  profit: string;
  value: string;
}
const FriendCard: React.FC<FriendCardProps> = ({
  name,
  value,
  role,
  profit,
}) => {
  return (
    <div className="grid grid-col-1  grid-col-1 w-full">
      <div className="group rounded-xl bg-[#272A30] py-4 px-2 sm:p-3 max-sm:py-2 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] flex justify-between">
        <div className="flex grid-cols-2 gap-3 w-full">
          <img
            src="/image/hamster.png"
            alt=""
            className="w-12 h-12 max-sm:w-10 max-sm:h-10"
          />
          <div className="flex flex-row w-full justify-between">
            <div className="space-y-3 max-sm:space-y-1">
              <p className="text-white text-lg font-semibold text-left max-sm:text-sm">
                {name}
              </p>
              <div className="flex items-center">
                <p className="text-white max-sm:text-sm">{role}</p>
                <img
                  src="/image/dollar.png"
                  alt=""
                  className="w-6 h-6 ml-1 max-sm:w-4 max-sm:h-4"
                />
                <p className="text-orange-400">+{profit}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/image/dollar.png" alt="" className="w-8 h-8 ml-1 max-sm:w-6 max-sm:h-6" />
              <p className="text-white">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
