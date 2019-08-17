import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';

const StyledWrapper = styled.ul`
  height: auto;
  width: 250px;
`;

const SideBar = () => {
  const array = [
    { name: 'Moje CV', link: 'url...', active: true },
    { name: 'Moje dokumenty', link: 'url...', active: false },
    { name: 'Moje konto', link: 'url...', active: false },
    { name: 'Klauzula poufności', link: 'url...', active: false },
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
