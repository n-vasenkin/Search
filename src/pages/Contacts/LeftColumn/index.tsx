import React from 'react';
import { Block, SettingsBlock } from './style';

export default class LeftColumn extends React.Component {
  private get settings(): JSX.Element {
    return (
      <SettingsBlock>
        <h3>Настройки</h3>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </SettingsBlock>
    );
  }

  private get filter(): JSX.Element {
    return (
      <Block>
        <h3>Фильтр</h3>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </Block>
    );
  }

  render(): JSX.Element {
    return (
      <>
        {this.settings}
        {this.filter}
      </>
    );
  }
}
