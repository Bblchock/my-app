import { MuiDrawer, MuiDrawerProps, styled } from 'shared';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-end',
  ...theme.mixins.toolbar,
}));

export const UiDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'drawerWidth',
})<
  MuiDrawerProps & {
    drawerWidth: number;
  }
>`
  width: ${({ drawerWidth }) => drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${({ drawerWidth }) => drawerWidth}px;
    box-sizing: border-box;
  },
`;
