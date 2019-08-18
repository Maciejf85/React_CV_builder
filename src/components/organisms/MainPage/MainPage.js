import React from 'react';
import styled from 'styled-components';
import SideBar from 'components/molecules/sideBar/SideBar';
import MyCv from 'components/molecules/MainPageViews/MyCv';
import MyDocuments from 'components/molecules/MainPageViews/MyDocuments';
import MyAccount from 'components/molecules/MainPageViews/MyAccount';
import Confidential from 'components/molecules/MainPageViews/Confidential';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  width: 900px;
  min-width: 55vw;
  height: 600px;
  min-height: 50vh;
  padding: 10px;
  margin: 0 auto;
  /* border: 1px solid black; */
  /* background: #f0f0f0; */
`;

const MainPage = () => {
  const currentView = useSelector(({ path }) => path.currentView);
  return (
    <>
      <StyledWrapper>
        <SideBar />
        {currentView === 'cv' && <MyCv />}
        {currentView === 'documents' && <MyDocuments />}
        {currentView === 'account' && <MyAccount />}
        {currentView === 'confidentiality' && <Confidential />}
      </StyledWrapper>
    </>
  );
};

export default MainPage;
