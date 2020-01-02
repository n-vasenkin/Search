import React from 'react';
import styled, { StyledComponentBase } from 'styled-components';

const RawSvgEL: StyledComponentBase<any, any> = styled.img`
  line-height: 0;
  height: inherit;
  width: inherit;
  display: block;
`;

interface IRawSvgProps {
  icon?: string;
  html?: any;
}

export default class PikRawSvg extends React.Component<IRawSvgProps> {
  render(): JSX.Element {
    const { icon, html, ...props } = this.props;
    return <RawSvgEL {...props} src={require(`icons/${icon}.svg`)} />;
  }
}

// return <RawSvgEL {...props} dangerouslySetInnerHTML={{ __html: require(`icons/${icon}.svg`) }} />;
