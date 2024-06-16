import TokenCard from "../TokenCard";

const Markets = () => {
  return (
    <div className="flex grid-cols-2 gap-4">
      <TokenCard image="/image/fantoken.png" content="street" value="64.1k" />
      <TokenCard image="/image/staking.png" content="street" value="10.1k" />
    </div>
  );
};
export default Markets;
