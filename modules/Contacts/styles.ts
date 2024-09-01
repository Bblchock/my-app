import { styled } from 'shared';

export const Wrapper = styled('div')`
  width: max-content;
  margin: ${({ theme }) => theme.spacing(1)} auto;
  display: grid;
  grid-template-columns: 100px 1fr;

  & > * {
    padding: ${({ theme }) => theme.spacing(0.5, 4)};
    border: 1px solid ${({ theme }) => theme.palette.text.primary};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const Title = styled('div')`
  width: max-content;
  margin: ${({ theme }) => theme.spacing(2)} auto;
`;
