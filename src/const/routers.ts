import { createBrowserHistory, History } from 'history';
import { Singleton } from 'typescript-ioc';

@Singleton
export class ConstRouter {
  MAIN_ROOT: string = Pages.MAIN_ROOT;
  TEST_ROOT: string = Pages.TEST_ROOT;

  history: History = createBrowserHistory();
}

export enum Pages {
  MAIN_ROOT = '/',
  TEST_ROOT = '/test'
}

export const PagesNames = {
  [Pages.MAIN_ROOT]: 'Главная',
  [Pages.TEST_ROOT]: 'Тест'
};
