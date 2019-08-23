import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/footer';
import MainPage from 'components/organisms/MainPage/MainPage';
import store from 'store';
import { getData, changeSidePanelState } from 'actions';
import ConfirmSidePanel from 'components/atoms/ConfirmSidePanel/ConfirmSidePanel';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
  /* border: 1px solid orange; */
`;

class Main extends Component {
  componentDidMount() {
    store.dispatch(getData());
  }

  render() {
    const { isVisible } = this.props;
    return (
      <>
        <StyledWrapper>
          <NavBar />
          <button type="button" onClick={() => store.dispatch(changeSidePanelState())}>
            change state
          </button>
          <MainPage />
          <Footer />
          <ConfirmSidePanel pose={isVisible ? 'hidden' : 'visible'} />
        </StyledWrapper>
      </>
    );
  }
}
const MapStateToProps = state => state.appState;
export default connect(MapStateToProps)(Main);
