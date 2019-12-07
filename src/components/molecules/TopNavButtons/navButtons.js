import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import FirstStyle from 'components/themes/FirstStyle';

import path from '../../../path';

const StyledWrapper = styled.ul`
  width: 100%;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  /* border: 1px solid white; */
  padding: 0;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    min-width: 100px;
    height: 100%;
    color: ${({ theme }) => theme.colors.lightGrey};
    border: 1px solid ${({ theme }) => theme.colors.buttonCaption};
    margin: 0 10px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.ms};
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.thin};
    outline: none;
    background: inherit;
    transition: 0.3s;

    &:hover :not(.active) {
      background: ${({ theme }) => theme.colors.primaryGrey};
      color: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
    }
  }

  .active {
    color: white;
    border: none;
    font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
  .disable {
    opacity: 0.3;
    cursor: default;
    pointer-events: none;

    &:hover {
      cursor: default;
      background: inherit;
    }
  }
`;

const NavButtons = () => {
  const logedIn = useSelector(({ currentCv }) => currentCv);
  const containsCv = logedIn ? Object.entries(logedIn).length : undefined;
  return (
    <StyledWrapper>
      <li>
        <NavLink activeClassName="active" exact to={path.main}>
          Strona główna
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className={containsCv ? '' : 'disable'} to={path.edit}>
          Edytor
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className={containsCv ? '' : 'disable'} to={path.preview}>
          Podgląd
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className={containsCv ? '' : 'disable'} to={path.preview}>
          Pobierz
        </NavLink>
      </li>
    </StyledWrapper>
  );
};

export default NavButtons;
