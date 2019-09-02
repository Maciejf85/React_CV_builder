import React from 'react';
import styled from 'styled-components';
import SideBar from 'components/molecules/SideBar/SideBar';
import MyCv from 'components/organisms/MainPageViews/MyCv';
import MyDocuments from 'components/organisms/MainPageViews/MyDocuments';
import MyAccount from 'components/organisms/MainPageViews/MyAccount';
import Confidential from 'components/organisms/MainPageViews/Confidential';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  width: 900px;
  min-width: 55vw;
  height: 600px;
  min-height: 50vh;
  padding: 10px;
  margin: 0 auto;
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
