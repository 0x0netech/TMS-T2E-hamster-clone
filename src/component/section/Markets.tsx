import TokenCard from "../TokenCard";

const Markets = () => {
  return (
    <div className="flex grid-cols-2 gap-4">
      <TokenCard
        image="/image/fantoken.png"
        content="Fan tokens"
        value="64.1k"
        revune="234.23K"
      />
      <TokenCard
        image="/image/staking.png"
        content="Staking"
        value="10.1k"
        revune="212.23k"
      />
    </div>
  );
};
export default Markets;
