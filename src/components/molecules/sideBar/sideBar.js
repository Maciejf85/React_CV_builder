import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';

const StyledWrapper = styled.ul`
  height: auto;
  width: 250px;
  background: white;
`;

const SideBar = () => {
  const array = [
    { name: 'Moje CV', link: 'main', active: true },
    { name: 'Moje dokumenty', link: 'edit', active: false },
    { name: 'Moje konto', link: 'preview', active: false },
    { name: 'Klauzula poufności', link: 'url...', active: false },
  ];
  return (
    <StyledWrapper>
      {array.map(item => (
        <NavListItem key={item.name} name={item.name} link={item.link} active={item.active} />
      ))}
    </StyledWrapper>
  );
};

export default SideBar;
