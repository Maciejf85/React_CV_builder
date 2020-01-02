import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/Footer';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import path from '../path';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  color: black;
  display: flex;
`;
class Template extends Component {
  componentDidMount() {
    // console.log('Component Edit did mount');
  }

  render() {
    const { language } = this.props.appState;
    const { template } = this.props;
    if (this.props.isSet === undefined) {
      return <Redirect to={path.login} />;
    }

    return (
      <>
        <NavBar language={language} />
        <StyledWrapper>{template.template}</StyledWrapper>
        <Footer language={language} />
      </>
    );
  }
}

const MapStateToProps = ({ appState, currentCv }) => ({
  appState,
  isSet: currentCv.currentItem,
  template: currentCv.currentItem,
});
export default connect(MapStateToProps)(Template);
