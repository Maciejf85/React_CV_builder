import React from 'react';
import styled from 'styled-components';
import EditNavList from 'components/atoms/List/EditNavList';
import { editViews } from 'data';

const StyledWrapper = styled.div`
  width: 280px;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.mainGrey};
  display: flex;
  flex-direction: column;
  color: white;
  ul {
    margin-top: 50px;
  }
`;

const EditSidebar = () => {
  return (
    <StyledWrapper>
      <ul>
        <div>Tytuł</div>
        {editViews.map(item => (
          <EditNavList key={item.link} name={item.name} link={item.link} icons={item.icon} />
        ))}
      </ul>
    </StyledWrapper>
  );
};
export default EditSidebar;
