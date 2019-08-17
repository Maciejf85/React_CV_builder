import React from 'react';
import styled from 'styled-components';
import SideBar from 'components/molecules/sideBar/sideBar';

const StyledWrapper = styled.div`
  width: 900px;
  min-width: 55vw;
  height: 600px;
  min-height: 50vh;
  padding: 10px;
  margin: 0 auto;
  /* background: #f0f0f0; */
`;

const MainPage = () => (
  <>
    <StyledWrapper>
      <h1>Main page</h1>
      <SideBar />
    </StyledWrapper>
  </>
);

export default MainPage;
