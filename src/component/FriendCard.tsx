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
      <div className="group rounded-xl bg-[#272A30] py-4 px-2 sm:p-3 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0 -8px 0px 0px #2196f3] flex justify-between">
        <div className="flex grid-cols-2 gap-3 w-full">
          <img src="/image/hamster.png" alt="" className="w-12 h-12" />
          <div className="flex flex-row w-full justify-between">
            <div className="space-y-3">
              <p className="text-white text-lg font-semibold text-left">
                {name}
              </p>
              <div className="flex items-center">
                <p className="text-white">{role}</p>
                <img src="/image/dollar.png" alt="" className="w-6 h-6 ml-1" />
                <p className="text-orange-400">+{profit}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/image/dollar.png" alt="" className="w-8 h-8 ml-1" />
              <p className="text-white">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
