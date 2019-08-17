import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  background: ${({ theme }) => theme.colors.primaryGrey};
  width: 100%;
  color: white;
  padding: 10px;

  span {
    font-weight: ${({ theme }) => theme.font.bold};
    letter-spacing: 1px;
  }
`;

const Footer = () => (
  <StyledWrapper>
    <p>
      Wszystkie prawa zastrzeżone <span>Maciej Fiałkowski 2019 </span>
    </p>
  </StyledWrapper>
);

export default Footer;
