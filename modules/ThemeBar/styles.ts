import { Grid, styled } from 'shared';

export const Wrapper = styled(Grid)`
  position: fixed;
  bottom: 0;
  right: 0;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main}
`;
