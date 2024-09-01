import { type SpeedDialProps } from 'shared';

import { UiSpeedDial } from './styles';

export interface CustomSpeedDial extends SpeedDialProps {
  isDarkMode: boolean;
}

export const SpeedDial = (props: CustomSpeedDial) => {
  return <UiSpeedDial {...props}></UiSpeedDial>;
};
