export default function ProgressBar({ value }: { value: number }) {
  return (
    <>
      <div className="flex flex-row justify-between text-white px-10 py-1">
        <h5>Platinum</h5>
        <div className="flex">
          <h5 className=" text-yellow-300">Level</h5>
          <span>
            <h5>&nbsp;4/10</h5>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full h-6 border-[#E39431] bg-[#2F2F2F] border-[1px] rounded-full flex items-center">
          <div
            className="bg-[#B7A0DC] h-4 rounded-full mx-1"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
