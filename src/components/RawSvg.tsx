import React from 'react';
import styled, { StyledComponentBase } from 'styled-components';

interface IPikRawSvg {
  icon?: string;
  html?: any;
}

const RawSvgEL: StyledComponentBase<any, any> = styled.span`
  display: inline-block;
  line-height: 0;
  svg {
    height: inherit;
    width: inherit;
  }
`;

export default class PikRawSvg extends React.Component<IPikRawSvg> {
  render(): JSX.Element {
    const { icon, html, ...props } = this.props;
    return <RawSvgEL {...props} dangerouslySetInnerHTML={{ __html: icon ? require(`icons/${icon}.raw.svg`) : html }} />;
  }
}
