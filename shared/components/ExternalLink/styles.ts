import { styled } from 'shared';

export const UiLink = styled('a')`
  &[href*='https']:after {
    margin-left: 4px;
    content: '\\1F875';
  }
`;
