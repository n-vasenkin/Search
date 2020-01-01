import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'routers/AppRouter';

const rootEl = document.getElementById('root');

class App extends React.Component {
  constructor(props: any) {
    super(props);
    dayjs.locale('ru');
    dayjs.extend(dayOfYear);
    dayjs.extend(LocalizedFormat);
    dayjs.extend(utc);
  }

  render(): JSX.Element {
    return <AppRouter />;
  }
}

ReactDOM.render(<App />, rootEl);
