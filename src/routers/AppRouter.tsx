import { Header } from 'common';
import { ConstRouter } from 'const/routers';
import 'globalCss.css';
import PageAuth from 'pages/Auth';
import PageContacts from 'pages/Contacts';
import PageHome from 'pages/Home';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Inject } from 'typescript-ioc';

export default class AppRouter extends React.PureComponent {
  @Inject private constRouter: ConstRouter;

  render(): JSX.Element {
    return (
      <>
        <Router history={this.constRouter.history}>
          <>
            <Header />
            <Switch>
              <Route exact path={this.constRouter.MAIN_ROOT} component={PageHome} />
              <Route exact path={this.constRouter.CONTACTS_ROOT} component={PageContacts} />
              <Route exact path={this.constRouter.AUTH_ROOT} component={PageAuth} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}
