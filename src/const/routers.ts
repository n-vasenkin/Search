import { createBrowserHistory, History } from 'history';
import { Singleton } from 'typescript-ioc';

@Singleton
export class ConstRouter {
  AUTH_ROOT: string = Pages.AUTH_ROOT;
  MAIN_ROOT: string = Pages.MAIN_ROOT;
  CONTACTS_ROOT: string = Pages.CONTACTS_ROOT;

  history: History = createBrowserHistory();
}

export enum Pages {
  MAIN_ROOT = '/',
  AUTH_ROOT = '/auth',
  CONTACTS_ROOT = '/contacts'
}

export const PagesNames = {
  [Pages.MAIN_ROOT]: 'Главная',
  [Pages.AUTH_ROOT]: 'Вход / Регистрация',
  [Pages.CONTACTS_ROOT]: 'Контакты'
};
