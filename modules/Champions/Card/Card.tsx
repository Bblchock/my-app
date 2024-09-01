import { MuiCardProps } from 'shared';

import { Name, UiCard, Img } from './styles';

export interface CardProps extends MuiCardProps {
  rung: number;
  name: string;
  imgUrl: string;
}

export const Card = ({ rung, name, imgUrl, ...props }: CardProps) => {
  return (
    <UiCard size="small" rung={rung} fullWidth {...props}>
      <Img src={imgUrl} alt={`picture of ${name}`} />
      <Name>{name}</Name>
    </UiCard>
  );
};
