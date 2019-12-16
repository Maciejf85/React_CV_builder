import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';
import { mainViews } from 'data';

const StyledWrapper = styled.ul`
  min-width: 250px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  @media ${({ theme }) => theme.media.small} {
    background: red;
    min-width: auto;
    width: 100%;
    margin: 0;
    flex-direction: row;
  }
  @media ${({ theme }) => theme.media.medium} {
    background: green;
  }
  @media ${({ theme }) => theme.media.tablet} {
    background: blue;
  }
`;

const sideBar = ({ language }) => {
  console.log('language = sideBAr', language);
  return (
    <StyledWrapper>
      {mainViews.map(item => (
        <NavListItem
          key={item.name}
          name={language === 'PL' ? item.name : item.nameL}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </StyledWrapper>
  );
};

export default sideBar;
