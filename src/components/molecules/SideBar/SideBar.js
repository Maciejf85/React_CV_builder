import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';
import { mainViews } from 'data';

const StyledWrapper = styled.ul`
  min-width: 250px;
  margin-right: 15px;
  /* border: 1px solid black; */
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
