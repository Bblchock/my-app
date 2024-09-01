import { makeAutoObservable } from 'mobx';

import { settingsData, settingsDataType } from './methods';

import { RoutingData } from 'components';

export class SettingsStore {
  public isDrawerOpen: boolean = true;
  public currentPage: RoutingData = {} as RoutingData;
  public drawerWidth: number = 220;

  constructor(private readonly settingsData: settingsDataType) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.refreshSettings();
  }

  private refreshSettings(): void {
    this.isDrawerOpen = this.settingsData.readDrawerState();
    this.currentPage = this.settingsData.readCurrentPage();
  }

  public setDrawerState(newDrawerState: boolean): void {
    this.isDrawerOpen = newDrawerState;
    this.settingsData.saveDrawerState(newDrawerState);
  }

  public setCurrentPage(currentPage: RoutingData): void {
    this.currentPage = currentPage;
    this.settingsData.saveCurrentPage(currentPage);
  }
}

export const settingsStore = new SettingsStore(settingsData);
