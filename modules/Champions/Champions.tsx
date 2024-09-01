import { observer } from 'mobx-react-lite';
import { Champion } from 'public';
import { championsStore } from 'data';

import { Card } from './Card';
import { ChampionsWrapper } from './styles';

export const Champions = observer(() => {
  const { champions } = championsStore;

  return (
    <ChampionsWrapper>
      {champions.map((obj: Champion) => (
        <Card
          rung={Number(obj.rung)}
          key={obj.name}
          imgUrl={obj.img}
          name={obj.name}
        />
      ))}
    </ChampionsWrapper>
  );
});
