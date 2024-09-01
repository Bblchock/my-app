import { makeAutoObservable } from 'mobx';
import { Champion, champions } from 'public/champions';

import { PositionFilter, RoleFilter, RungFilter } from '../filterStore';

export class ChampionsStore {
  private previousRung?: RungFilter;
  private readonly allChampions: Champion[] = [] as Champion[];
  public champions: typeof this.allChampions = [] as typeof this.allChampions;
  private filteredByRung: typeof this.champions;

  constructor(private readonly championsData: Champion[]) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.allChampions = this.championsData;
    this.filteredByRung = this.allChampions;
    this.showAllChampions();
  }

  public showAllChampions(): void {
    this.champions = this.allChampions;
  }

  private getFilteredByRung(rung: RungFilter): typeof this.champions {
    return this.allChampions.filter((champion) =>
      this.isTargetRung(champion.rung, rung),
    );
  }

  private getFilteredByProperties(
    filters: Array<PositionFilter | RoleFilter>,
  ): typeof this.champions {
    return this.filteredByRung.filter((champ) => {
      const roleAndPosition = [...champ.role, ...champ.position];
      return filters.every((property) => roleAndPosition.includes(property));
    });
  }

  public refreshChampions(
    targetProperty: Set<PositionFilter | RoleFilter>,
    targetRung?: RungFilter,
  ) {
    if (targetRung && this.previousRung !== targetRung) {
      this.filteredByRung = this.getFilteredByRung(targetRung);
      this.previousRung = targetRung;
    } else {
      this.filteredByRung = this.allChampions;
    }

    if (targetProperty.size) {
      this.champions = this.getFilteredByProperties(Array.from(targetProperty));
    } else {
      this.champions = this.filteredByRung;
    }
  }

  private isTargetRung(
    rung: Champion['rung'],
    targetRung: RungFilter,
  ): boolean {
    const currentRung = Number(rung);

    switch (targetRung) {
      case RungFilter.max:
        return currentRung === 7;
      case RungFilter.high:
        return currentRung === 5 || currentRung === 6;
      default:
        return currentRung < 5;
    }
  }
}

export const championsStore = new ChampionsStore(champions);
