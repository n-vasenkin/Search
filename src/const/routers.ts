import { createBrowserHistory, History } from 'history';
import { Singleton } from 'typescript-ioc';

@Singleton
export class ConstRouter {
  MAIN_ROOT: string = Pages.MAIN_ROOT;
  CONTACTS_ROOT: string = Pages.CONTACTS_ROOT;

  history: History = createBrowserHistory();
}

export enum Pages {
  MAIN_ROOT = '/',
  CONTACTS_ROOT = '/contacts'
}

export const PagesNames = {
  [Pages.MAIN_ROOT]: 'Главная',
  [Pages.CONTACTS_ROOT]: 'Контакты'
};
