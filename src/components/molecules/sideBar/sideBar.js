import React from 'react';
import styled from 'styled-components';
import NavListItem from 'components/atoms/List/MainPageNavList';

const StyledWrapper = styled.ul`
  min-width: 250px;
  border: 1px solid black;
`;

const sideBar = () => {
  const array = [
    { name: 'Moje CV', link: 'cv' },
    { name: 'Moje dokumenty', link: 'documents' },
    { name: 'Moje konto', link: 'account' },
    { name: 'Klauzula poufności', link: 'confidentiality' },
  ];
  return (
    <StyledWrapper>
      {array.map(item => (
        <NavListItem key={item.name} name={item.name} link={item.link} />
      ))}
    </StyledWrapper>
  );
};

export default sideBar;
