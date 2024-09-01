import { styled, IconButton as MuiIconButton } from 'shared';

import { IconButtonProps } from './IconButton';

export const UiIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) =>
    prop !== 'drawerWidth' && prop !== 'isDrawerOpen',
})<IconButtonProps>`
  display: ${({ isDrawerOpen }) => (isDrawerOpen ? 'none' : 'flex')};
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  margin-right: ${({ theme }) => theme.spacing(1)};
`;
