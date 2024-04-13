import { Champions, Filter } from 'components';

const ChampFilter = () => {
  return (
    <div className="champions--wrapper">
      <Filter />
      <Champions />
    </div>
  );
};

export default ChampFilter;
