import { ListItemButton, styled } from 'shared';

export const UiListItemButton = styled(ListItemButton)`
  color: ${({ theme }) => theme.palette.primary.main};

  & span {
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }

  & svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
