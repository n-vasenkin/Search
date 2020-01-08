import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Content, LeftColumn, Main, RightColumn } from './style';

interface ILayoutProps {
  content: JSX.Element;
  leftColumn?: JSX.Element;
  rightColumn?: JSX.Element;
}

@observer
export default class Layout extends React.Component<ILayoutProps> {
  render(): JSX.Element {
    const { leftColumn, content, rightColumn } = this.props;
    return (
      <Main>
        <LeftColumn>{leftColumn}</LeftColumn>
        <Content>{content}</Content>
        <RightColumn>{rightColumn}</RightColumn>
      </Main>
    );
  }
}
