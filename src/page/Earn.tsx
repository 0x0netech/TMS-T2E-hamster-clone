import EarnCard from "../component/EarnCard";
const Earn = () => {
  return (
    <div className="py-10 bg-black p-4 pb-24">
      <div className="flex justify-center items-center">
        <img src="image/dollar.png" className="w-32 h-32" />
      </div>
      <p className="text-white text-3xl font-bold p-4">Earn More Money</p>
      <p className="text-white text-xl font-bold p-4 text-left">Daily tasks</p>
      <div className="py-3">
        <EarnCard
          title="Daily rewoard"
          image="image/cdollar.png"
          profit="234.3K"
          flag={true}
        />
      </div>
      <div className="flex flex-row justify-between items-center py-2">
        <p className="text-left py-2 text-white text-xl font-semibold">
          Tasks List
        </p>
      </div>
      <div className="mt-3 space-y-2">
        <EarnCard
          title="Join our TG channel"
          image="image/tg.png"
          profit="234.3K"
          flag={true}
        />
        <EarnCard
          title="Get exclusive listing info"
          image="image/youtube.png"
          profit="5000"
          flag={true}
        />
        <EarnCard
          title="Join our TG channel"
          image="image/tg.png"
          profit="234.3K"
          flag={true}
        />
        <EarnCard
          title="Get exclusive listing info"
          image="image/youtube.png"
          profit="5000"
          flag={true}
        />
        <EarnCard
          title="Follow your X account"
          image="image/twitter.png"
          profit="234.3K"
          flag={true}
        />
        <EarnCard
          title="Choose"
          image="image/hy.png"
          profit="234.3K"
          flag={true}
        />
        {/* <FriendCard
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
        <FriendCard name="Andria" role="Platium" profit="435.3K" value="+35K" /> */}
      </div>
    </div>
  );
};
export default Earn;
