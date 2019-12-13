import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';
import { mainViews } from 'data';

const StyledWrapper = styled.ul`
  min-width: 250px;
  margin: 15px;
  /* border: 1px solid black; */
  @media ${({ theme }) => theme.media.small} {
    background: red;
    min-width: auto;
    max-width: 50px;
  }
  @media ${({ theme }) => theme.media.medium} {
    background: green;
  }
  @media ${({ theme }) => theme.media.tablet} {
    background: blue;
  }
  @media ${({ theme }) => theme.media.desktop} {
    background: black;
  }
`;

const sideBar = () => {
  return (
    <StyledWrapper>
      {mainViews.map(item => (
        <NavListItem key={item.name} name={item.name} link={item.link} />
      ))}
    </StyledWrapper>
  );
};

export default sideBar;
