import React from 'react';
import styled from 'styled-components';
import EditNavList from 'components/atoms/List/EditNavList';
import { editViews } from 'data';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 0;
  ul {
    margin-top: 50px;
  }
`;

const EditSidebar = () => {
  return (
    <StyledWrapper>
      <ul>
        {editViews.map(item => (
          <EditNavList key={item.link} name={item.name} link={item.link} />
        ))}
      </ul>
    </StyledWrapper>
  );
};
export default EditSidebar;
