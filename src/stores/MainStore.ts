import { PagesNames } from 'const/routers';
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
    if (this.currentPage === page) return;
    this._currentPage = page;
    document.title = PagesNames[page];
  }
}
