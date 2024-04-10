import { useDispatch, useSelector } from 'react-redux';

import { setCurrentChampions, setClassButton } from '../redux/championsSlice';
import { RootState } from '../redux/store';
import { Champion } from '../img/champions';
import { FilterButtonState } from '../redux/utils.ts';

const Filter = () => {
  const dispatch = useDispatch();
  const { items, currentFilterButton, currentChampions } = useSelector(
    (state: RootState) => state.champions,
  );

  //Определить чемпионов, подходящих под роль/позицию/ранг
  const findChampions = (id: number, obj: FilterButtonState) => {
    let champions;
    let highlight = true;
    switch (id) {
      case 0:
        champions = items.slice();
        highlight = false;
        break;
      case 1:
        champions = currentChampions.filter(
          (arr: Champion) => arr.rung === '7',
        );
        break;
      case 2:
        champions = currentChampions.filter(
          (arr: Champion) => arr.rung === '5' || arr.rung === '6',
        );
        break;
      case 3:
        champions = currentChampions.filter(
          (arr: Champion) => arr.rung >= '1' && arr.rung < '5',
        );
        break;
      default:
        champions = currentChampions.filter((arr: Champion) => {
          console.log(arr);
          return arr.position.includes(obj.key) || arr.role.includes(obj.key);
        });
        break;
    }
    dispatch(setCurrentChampions(champions));
    dispatch(setClassButton({ id, highlight, currentFilterButton }));
  };

  //Список блоков с кнопками
  const buttonList = ['__all', '__rung', '__position', '__role'];

  //Нарисовать кнопку в нужном блоке
  const renderButton = (classBlock: string) => {
    return currentFilterButton.map(
      (obj: FilterButtonState, id: number) =>
        classBlock === obj.block && (
          <button
            key={obj.key}
            onClick={() => findChampions(id, obj)}
            className={'champions--wrapper__filter' + obj.class}
          >
            {' '}
            {obj.name}
          </button>
        ),
    );
  };

  return (
    <div className="champions--wrapper__filter">
      {buttonList.map((str, id) => (
        <div className={'champions--wrapper__filter' + str} key={id}>
          {renderButton(str)}
        </div>
      ))}
    </div>
  );
};

export default Filter;
