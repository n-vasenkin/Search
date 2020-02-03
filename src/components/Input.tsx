import { STYLE_VIEW } from 'const';
import React from 'react';
import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 3px;
  padding: 8px 12px;
  transition: 0.2;
  /* ${({ view }: { view: STYLE_VIEW }) => {
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
      case STYLE_VIEW.PRIMARY:
        styleButton.background = '#fff';
        styleButton.color = '#a4afba';
        styleButton.borderColor = '#838a92';
        hoverButton.color = '#65a3be';
        hoverButton.borderColor = '#65a3be';
        break;
      case STYLE_VIEW.SECONDARY:
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
  }} */
`;
