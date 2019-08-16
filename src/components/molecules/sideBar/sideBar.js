import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';

const StyledWrapper = styled.ul`
  height: auto;
  width: 30%;
  border: 2px solid black;
`;

const SideBar = () => {
  const array = [
    {
      name: 'Twoje CV',
      link: 'url...',
      active: true,
    },
    { name: 'Twoje dokumenty', link: 'url...', active: false },
  ];
  return (
    <StyledWrapper>
      {array.map(item => (
        <NavListItem key={item.name} name={item.name} active={item.active} />
      ))}
    </StyledWrapper>
  );
};

export default SideBar;
