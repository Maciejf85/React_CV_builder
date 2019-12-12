import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';
import { mainViews } from 'data';

const StyledWrapper = styled.ul`
  min-width: 250px;
  margin: 15px;
  /* border: 1px solid black; */
  @media ${({ theme }) => theme.media.mobileP} {
    background: red;
  }
  @media ${({ theme }) => theme.media.mobileL} {
    background: yellow;
  }
  @media ${({ theme }) => theme.media.tabletP} {
    background: blue;
  }
  @media ${({ theme }) => theme.media.tabletL} {
    background: orange;
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
