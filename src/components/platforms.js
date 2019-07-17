import React from 'react';

import styled from 'styled-components';
import { theme, media } from '../styles';

import Sublime from '../images/logos/sublime.png';
import Atom from '../images/logos/atom-green.png';
import VSCode from '../images/logos/vscode-new.png';
import iTerm from '../images/logos/iterm.png';
import Hyper from '../images/logos/hyperterm.png';
import Github from '../images/logos/github.png';

const PlatformsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
  width: 100%;

  ${media.tablet`padding: 50px 25px;`};
`;
const Platform = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.active};
  height: 200px;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  transition: ${theme.transition};
  min-width: 250px;
  margin: 10px;

  &:hover {
    background-color: ${theme.colors.hover};
    transform: translateY(-5px);
  }
`;
const Logo = styled.img`
  width: 90px;
`;
const PlatformName = styled.div`
  margin-top: 15px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
`;

const platforms = [
  {
    name: 'Source Code',
    url: 'https://github.com/ayanbag/spoon-vscode',
    logo: Github,
  },
  {
    name: 'VS Code',
    url: 'https://marketplace.visualstudio.com/items?itemName=ayanbag.spoon-vscode',
    logo: VSCode,
  }
];

const Platforms = () => (
  <PlatformsContainer>
    {platforms.map(({ name, url, logo }, i) => (
      <Platform key={i} href={url} target="_blank" rel="noopener noreferrer">
        <Logo src={logo} alt={name} />
        <PlatformName>{name}</PlatformName>
      </Platform>
    ))}
  </PlatformsContainer>
);

Platforms.propTypes = {};

export default Platforms;
