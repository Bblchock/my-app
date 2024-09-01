import { readLocalStorage, saveLocalStorage } from './utils';

import { routeList, RoutingData } from 'components';

export const settingsData = {
  readDrawerState: (): boolean => {
    return readLocalStorage('drawer', true);
  },

  saveDrawerState: (drawerState: boolean): void => {
    saveLocalStorage('drawer', drawerState);
  },

  readCurrentPage: (): RoutingData => {
    return readLocalStorage('currentPage', routeList[0]);
  },

  saveCurrentPage: (currentPage: RoutingData): void => {
    saveLocalStorage('currentPage', currentPage);
  },
};

export type settingsDataType = typeof settingsData;
