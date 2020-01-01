import { BobrView } from 'const/style';
import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 13px;
  border: 1px solid;
  border-radius: 3px;
  padding: 6px 12px;
  cursor: pointer;
  transition: 0.2;
  ${({ view }: { view: BobrView }) => {
    const styleButton = {
      background: '',
      borderColor: 'transparent',
      color: ''
    };

    const hoverButton = {
      background: '',
      borderColor: 'transparent',
      color: ''
    };

    switch (view) {
      case BobrView.PRIMARY:
        styleButton.background = '#fff';
        styleButton.color = '#a4afba';
        styleButton.borderColor = '#838a92';
        hoverButton.color = '#65a3be';
        hoverButton.borderColor = '#65a3be';
        break;
      case BobrView.SECONDARY:
        styleButton.background = '#65a3be';
        styleButton.color = '#fff';
        hoverButton.background = 'rgba(61, 144, 190, 0.93)';
        break;
      default:
        break;
    }
    return css`
      background: ${styleButton.background};
      color: ${styleButton.color};
      border-color: ${styleButton.borderColor};
      :hover {
        background: ${hoverButton.background};
        color: ${hoverButton.color};
        border-color: ${hoverButton.borderColor};
      }
    `;
  }}
`;

export default ({ children, view }: { children: string; view?: BobrView }) => <Button view={view}>{children}</Button>;
