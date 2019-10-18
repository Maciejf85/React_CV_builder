import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
      background: ${({ theme }) => theme.colors.buttonActive};
      cursor: pointer;
    }


/* {media query} 
    ${({ theme }) => theme.media.tabet} {

      background:red;

    }
    */
  
  }
  .active{
        font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.buttonActive};
    }
`;

const NavButtons = props => {
  return (
    <StyledWrapper>
      <li>
        <NavLink activeClassName="active" exact to={path.main}>
          Main
        </NavLink>
      </li>
      {/* <li>
        <NavLink activeClassName="active" to={path.edit}>
          Editor
        </NavLink>
      </li> */}
      <li>
        <NavLink activeClassName="active" to={path.preview}>
          Preview
        </NavLink>
      </li>
    </StyledWrapper>
  );
};

export default NavButtons;
