import { styled } from 'shared';

export const ButtonsWrapper = styled('div')`
  width: 100%;
`;

export const ButtonGroup = styled('div')`
  margin: 0 auto;
  max-width: 40%;
  display: flex;

  &:first-of-type {
    max-width: 20%;
  }

  @media (max-width: 1200px) {
    max-width: 50%;
  }
`;
