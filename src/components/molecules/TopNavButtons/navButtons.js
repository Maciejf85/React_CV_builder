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
    padding: 0 15px;
    min-width: 100px;
    height: 100%;
    color: ${({ theme }) => theme.colors.buttonActive};
    border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
    margin: 0 10px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.ms};
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.thin};
    outline: none;
    background: inherit;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryGrey};
      color: ${({ theme }) => theme.colors.primaryBlue};
        font-weight: ${({ theme }) => theme.font.bold};
      cursor: pointer;
    }
    }

/* {media query} 
    ${({ theme }) => theme.media.tabet} {

      background:red;

    }
    */
  
  
  .active{
        /* background:rgba(0, 153, 255,0.35); */
        color:white;
    background: ${({ theme }) => theme.colors.imageResizerBackground};
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
