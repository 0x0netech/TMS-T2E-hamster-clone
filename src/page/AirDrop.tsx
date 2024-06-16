import CheckCom from "../component/check";
const Airdrop = () => {
  return (
    <div className="py-10 bg-black p-4 min-h-[90vh]">
      <div className="flex justify-center items-center">
        <img src="image/hamstercoin.png" className="w-34 h-32" />
      </div>
      <p className="text-white text-4xl font-bold p-4">
        Get ready, Airdrop is
        <br /> coming soon!
      </p>
      <div className="mt-6">
        <div className="flex">
          <CheckCom flag={true} />
          <p className="text-white text-xl">Exchange negotiations</p>
        </div>
        <img src="image/thredot.png" className="w-2 h-4 ml-3" />
        <div className="flex">
          <CheckCom flag={true} />
          <p className="text-white text-xl">Market Maker negotiations</p>
        </div>
        <img src="image/thredot.png" className="w-2 h-4 ml-3" />
        <div className="flex">
          <CheckCom flag={true} />
          <p className="text-white text-xl">Key partnerships are coming</p>
        </div>
        <img src="image/thredot.png" className="w-2 h-4 ml-3" />
        <div className="flex">
          <CheckCom flag={false} />
          <p className="text-white text-xl">Airdorp task list</p>
        </div>
      </div>
    </div>
  );
};
export default Airdrop;
