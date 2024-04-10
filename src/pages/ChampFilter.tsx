import { Champions } from '../components';
import Filter from '../components/Filter';

const ChampFilter = () => {
  return (
    <div className="champions--wrapper">
      <Filter />
      <Champions />
    </div>
  );
};

export default ChampFilter;
