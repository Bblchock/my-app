import { styled } from 'shared';

export const ChampionsWrapper = styled('div')`
  display: flex;
  margin: 5px auto;
  border-radius: 5px;
  flex: 1 1 100px;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 2000px) {
    width: 1002px;
  }

  @media (max-width: 1390px) {
    width: 697px;
  }
`;
