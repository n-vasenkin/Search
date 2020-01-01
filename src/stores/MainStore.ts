import { action, computed, observable } from 'mobx';
import { Singleton } from 'typescript-ioc';

@Singleton
export default class MainStore {
  @observable private _currentPage: string;

  @computed get currentPage(): string {
    return this._currentPage;
  }

  @action.bound
  changeCurrentPage(page: string): void {
    this._currentPage = page;
  }
}
