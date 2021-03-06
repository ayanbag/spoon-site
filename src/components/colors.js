import React from 'react';

import copyToClipboard from '../utils/copyToClipboard';

import styled from 'styled-components';
import { theme, media } from '../styles';

const ColorsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 30px);
  grid-gap: 30px;
  justify-content: center;
  margin: 100px auto;

  ${media.tablet`grid-gap: 25px;`};
  ${media.phoneXL`grid-gap: 20px;`};
  ${media.phone`grid-gap: 15px;`};
`;
const CopyTitle = styled.h3`
  grid-column: 1 / -1;
  text-align: center;
  font-weight: 400;
  color: ${theme.colors.white};
`;
const ColorLabel = styled.div`
  position: absolute;
  top: -35px;
  left: -20px;
  background-color: ${theme.colors.active};
  color: ${theme.colors.lightGrey};
  font-size: ${theme.fontSizes.base};
  border-radius: 3px;
  padding: 4px 6px;
  transition: ${theme.transition};
  opacity: 0;
  z-index: -1;
`;
const Color = styled.div`
  position: relative;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-5px);

    ${ColorLabel} {
      opacity: 1;
      z-index: 1;
    }
  }
`;
const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 100%;
  transition: ${theme.transition};
  background-color: ${props => props.color};
  z-index: 2;
  ${media.phoneXL`
    width: 27px;
    height: 27px;
  `};
  ${media.phone`
    width: 25px;
    height: 25px;
  `};
`;

const colors = [
  '#45F7B9',
  '#7C75FF',
  '#D5B5FF',
  '#C2E67E',
  '#F92672',
  '#a2aabc',
  '#66D9EF',
  '#ffcc66',
  '#1DF044',
  '#A8A6A6',
  '#FF7FC3',
  '#3CFCC9',
  '#FAC664',
  '#D5B5FF',
];

const Colors = () => (
  <ColorsContainer>
    <CopyTitle>Click to copy!</CopyTitle>
    {colors.map((color, i) => (
      <Color key={i}>
        <ColorLabel>{color}</ColorLabel>
        <ColorButton color={color} onClick={() => copyToClipboard(color)} />
      </Color>
    ))}
  </ColorsContainer>
);

export default Colors;
