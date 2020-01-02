import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEdit, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
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

    @media ${({ theme }) => theme.media.small} {
      font-size: ${({ theme }) => theme.fontSize.s};
      padding: 0;
      min-width: auto;
      width: 40px;
    }

    &:hover :not(.active) {
      background: ${({ theme }) => theme.colors.secondaryBlue};
      /* color: ${({ theme }) => theme.colors.primaryBlue}; */
      cursor: pointer;
    }

  }
  span {
    color: white;
    @media ${({ theme }) => theme.media.small} {
      display: none;
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
  .icon {
    display: none;
    @media ${({ theme }) => theme.media.small} {
      font-size: 1.5rem;
      display: block;
    }
  }
`;

const NavButtons = () => {
  const logedIn = useSelector(({ currentCv }) => currentCv);
  const language = useSelector(({ appState }) => appState.language);
  const containsCv = logedIn ? Object.entries(logedIn).length : undefined;
  return (
    <StyledWrapper>
      <li>
        <NavLink activeClassName="active" exact to={path.main}>
          <span>{language === 'PL' ? 'Strona główna' : 'Main Page'}</span>
          <div className="icon">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className={containsCv ? '' : 'disable'} to={path.edit}>
          <span>{language === 'PL' ? 'Edytor' : 'Editor'}</span>
          <div className="icon">
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className={containsCv ? '' : 'disable'}
          to={path.templates}
        >
          <span>{language === 'PL' ? 'Szablony' : 'Templates'}</span>
          <div className="icon">
            <FontAwesomeIcon icon={faFileImage} />
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className={containsCv ? '' : 'disable'} to={path.preview}>
          <span>{language === 'PL' ? 'Podgląd' : 'Preview'}</span>
          <div className="icon">
            <FontAwesomeIcon icon={faFilePdf} />
          </div>
        </NavLink>
      </li>
      {/* <li>
        <NavLink activeClassName="active" className={containsCv ? '' : 'disable'} to={path.preview}>
          Pobierz
        </NavLink>
      </li> */}
    </StyledWrapper>
  );
};

export default NavButtons;
