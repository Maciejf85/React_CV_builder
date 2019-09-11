import React from 'react';
import styled from 'styled-components';
import EditNavList from 'components/atoms/List/EditNavList';

const StyledWrapper = styled.div`
  width: 270px;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  display: flex;
  flex-direction: column;
  color: white;
  ul {
    margin-top: 50px;
  }
`;

const EditSidebar = () => {
  const cvValues = [
    { name: 'Dane osobowe', link: 'userData', icon: 'user', isActive: true },
    { name: 'Edukacja', link: 'education', icon: 'graduation-cap' },
    { name: 'Języki obce', link: 'languages', icon: 'flag' },
    { name: 'Umiejętności', link: 'skills', icon: 'coffee' },
    { name: 'Zainteresowania', link: 'interest', icon: 'graduation-cap' },
    { name: 'Klauzula poufności', link: 'confidential', icon: 'apple-alt' },
  ];
  return (
    <StyledWrapper>
      <ul>
        <div>Tytuł</div>
        {cvValues.map(item => (
          <EditNavList
            key={item.link}
            name={item.name}
            link={item.link}
            icons={item.icon}
            active={item.isActive}
          />
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default EditSidebar;
