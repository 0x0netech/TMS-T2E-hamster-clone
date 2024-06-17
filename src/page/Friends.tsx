import InviteCard from "../component/InviteCard";
import FriendCard from "../component/FriendCard";
const Friends = () => {
  return (
    <div className="py-10 bg-black p-4 min-h-[100vh]">
      <p className="text-white text-3xl font-bold">Invite Friends!</p>
      <p className="text-white text-xl pt-4 pb-6">
        You and your friend will receive bonuses!
      </p>
      <div className=" space-y-2 py-3">
        <InviteCard title="Invite a friend" profit="343,3432" />
        <InviteCard
          title="Invite a friend with Telegram Preminum"
          profit="5000"
        />
      </div>
      <div>
        <p className="text-blue-700 text-2xl font-bold">More bonuses</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-left py-2 text-white text-xl font-semibold">
          List of your friends(15)
        </p>
        <img
          src="/image/redo.png"
          alt=""
          className="w-8 h-8 max-sm:w-4 max-sm:h-4 mt-1"
        />
      </div>
      <div className="mt-3 space-y-2">
        <FriendCard
          name="Lari0 | FutureValueApp"
          role="Platium"
          profit="495.3K"
          value="+321K"
        />
        <FriendCard
          name="Dan Ber"
          role="Platium"
          profit="445.3K"
          value="+25K"
        />
        <FriendCard
          name="Lari0 | FutureValueApp"
          role="Platium"
          profit="495.3K"
          value="+321K"
        />
        <FriendCard
          name="Dan Ber"
          role="Platium"
          profit="445.3K"
          value="+25K"
        />
        <FriendCard name="Andria" role="Platium" profit="435.3K" value="+35K" />
      </div>
      <div className="h-[150px] bg-black" />
    </div>
  );
};
export default Friends;
