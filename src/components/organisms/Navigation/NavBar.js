import React from 'react';
// import Logo from 'components/atoms/Logo/Logo';
import LoggedIn from 'components/atoms/LoggedIn/LoggedIn';
import NavButtons from 'components/molecules/TopNavButtons/navButtons';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import LanguageButton from 'components/atoms/Buttons/LanguageButton';
import polishFlag from 'assets/polishFlag.png';
import britishFlag from 'assets/britishFlag.png';
import path from '../../../path';
// import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  padding: 0 10px;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainGrey};

  @media ${({ theme }) => theme.media.tablet} {
    width:100vw;
  }



  .lang{
    color:white;
    margin:0 10px;
    font-size:1.2rem;
  }
  p.logo {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.font.bold};
    text-align: center;
    flex-basis: ${({ editor }) => (editor ? '260px' : '150px')};
    flex-shrink: 0;
    span {
      color: ${({ theme }) => theme.colors.primaryBlue};
      font-weight: ${({ theme }) => theme.font.xbold};
    }
    @media ${({ theme }) => theme.media.small} {
      display: none;
    }
    @media ${({ theme }) => theme.media.medium} {
      display: none;
    }
    @media ${({ theme }) => theme.media.tablet} {
      display: none;
    }

  }
  ${({ editor }) =>
    editor &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      p.logo {
        @media ${({ theme }) => theme.media.desktop} {
          flex-basis: 220px;
        }
      }
    `}
    @media ${({ theme }) => theme.media.small} {
      padding:0 5px;
    }
    @media ${({ theme }) => theme.media.medium} {
      padding:0 5px;
    }


`;

const NavBar = ({ location, language }) => {
  const editor = location.pathname === `${path.login}edit` || false;
  return (
    <StyledWrapper editor={editor}>
      <p className="logo">
        <span>CV</span>-builder
      </p>
      <NavButtons editor={editor} />
      <div className="lang">{language}</div>
      <LanguageButton language="PL" icon={polishFlag} active={language === 'PL'} />
      <LanguageButton language="ENG" icon={britishFlag} active={language === 'ENG'} />
      <LoggedIn language={language} />
    </StyledWrapper>
  );
};

// NavBar.propTypes = {
//   logo: PropTypes.bool,
// };

NavBar.defaultProps = {
  logo: false,
};

export default withRouter(NavBar);
