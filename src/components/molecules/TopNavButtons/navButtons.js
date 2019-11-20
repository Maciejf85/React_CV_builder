import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import path from '../../../path';

const StyledWrapper = styled.ul`
  width: 100%;
  height:40px;
  list-style: none;
  display: flex;
  justify-content: start;
  /* border: 1px solid white; */
  padding: 0;


  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 80px;
    height: 100%;
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    margin: 0 10px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.ms};
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.thin};
    outline: none;
    background: inherit;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
    }
    }

/* {media query} 
    ${({ theme }) => theme.media.tabet} {

      background:red;

    }
    */
  
  
  .active{
        font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.buttonActive};
    }
  .disable{
   opacity:0.3;
  cursor:default;
  pointer-events:none;
  
      &:hover{
        cursor:default;      
           background: inherit;
      }
  }
`;

const NavButtons = () => {
  const logedIn = useSelector(({ currentCv }) => ({ currentCv }));
  const objectCount = Object.entries(Object.entries(logedIn)[0][1]).length;

  return (
    <StyledWrapper>
      <li>
        <NavLink activeClassName="active" exact to={path.main}>
          Strona główna
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className={!objectCount ? 'disable' : ''} to={path.edit}>
          Edytor
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className={!objectCount ? 'disable' : ''}
          to={path.preview}
        >
          Podgląd
        </NavLink>
      </li>
    </StyledWrapper>
  );
};

export default NavButtons;
