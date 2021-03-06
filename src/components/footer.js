import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
const { colors } = theme;
import Logo from '../images/logo.png';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.base};
  text-align: center;
  padding: 50px;
  img {
    width: 70px;
    margin-bottom: 30px;
  }
  a {
    padding: 10px 15px;
    background-color: ${colors.active};
    color: ${colors.white};
    &:hover,
    &:focus {
      background-color: ${colors.accent};
      color: ${colors.bg};
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <img src={Logo} alt="logo" />
    <a href="https://ayanbag.github.io" target="_blank">Made by Ayan</a>
  </FooterContainer>
);

export default Footer;
