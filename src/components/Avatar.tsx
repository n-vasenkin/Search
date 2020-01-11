import { SIZE } from 'const';
import React from 'react';
import styled, { css } from 'styled-components';

interface AvatarProps {
  className?: string;
  size?: SIZE;
  reset?: boolean;
}

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  position: ${({ reset }: AvatarProps) => (reset ? 'static' : 'absolute')};
  background: #33b5e5;
  border-radius: 50%;
  border-color: #fff;
  border-style: solid;
  left: 50%;
  ${({ size }: AvatarProps) => {
    let _size;
    let _borderWidth;
    switch (size) {
      case SIZE.EXTRA_SMALL:
        break;
      case SIZE.SMALL:
        _size = 50;
        _borderWidth = 2;
        break;
      case SIZE.MIDDLE:
        _size = 65;
        _borderWidth = 2;
        break;

      default:
        _size = 80;
        _borderWidth = 3;
    }
    return css`
      height: ${_size}px;
      width: ${_size}px;
      border-width: ${_borderWidth}px;
      transform: ${({ reset }: AvatarProps) => (reset ? 'none' : `translateX(${_size / -2}px)`)};
    `;
  }};
`;

export default class extends React.Component<AvatarProps> {
  render(): JSX.Element {
    return <Avatar {...this.props}>ВН</Avatar>;
  }
}
