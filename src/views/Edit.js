import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import EditSidebar from 'components/molecules/SideBar/EditSidebar';
import EditMainContent from 'components/organisms/EditMainContent/EditMainContent';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: (100vh - 50px);
  color: white;
  display: flex;
`;
class Edit extends Component {
  componentDidMount() {
    console.log('Component Edit did mount');
  }

  render() {
    return (
      <>
        <NavBar />
        <StyledWrapper>
          <EditSidebar />
          <EditMainContent />
        </StyledWrapper>
      </>
    );
  }
}

export default Edit;
