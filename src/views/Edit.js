import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import EditSidebar from 'components/molecules/SideBar/EditSidebar';
import EditMainContent from 'components/organisms/EditMainContent/EditMainContent';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ConfirmSidePanel from 'components/atoms/ConfirmSidePanel/ConfirmSidePanel';
import path from '../path';

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
    const { isVisible, error, language } = this.props.appState;
    if (this.props.isSet === undefined) {
      return <Redirect to={path.login} />;
    }

    return (
      <>
        <NavBar language={language} />
        <StyledWrapper>
          <EditSidebar language={language} />
          <EditMainContent />
          <ConfirmSidePanel pose={isVisible ? 'visible' : 'hidden'} error={error} />
        </StyledWrapper>
      </>
    );
  }
}

const MapStateToProps = ({ appState, currentCv }) => ({
  appState,
  isSet: currentCv.currentItem,
});
export default connect(MapStateToProps)(Edit);
