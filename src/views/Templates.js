import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/Footer';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TemplateItem from 'components/molecules/Template';
import temp0 from 'assets/template/template_0.jpg';
import temp1 from 'assets/template/template_1.jpg';
import temp2 from 'assets/template/template_2.jpg';
import { changeTemplate } from 'actions';
import { setNewCurrentCVData } from 'functions';
import ConfirmSidePanel from 'components/atoms/ConfirmSidePanel/ConfirmSidePanel';
import store from 'store';
import path from '../path';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(70vh - 50px);
  padding: 90px 50px 0;
  color: black;
  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    align-items: center;
  }
`;

const TemplateSelected = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
`;

class Template extends Component {
  componentDidUpdate(prevProps) {
    const { isSet, currentCv } = this.props;
    if (prevProps.isSet.template === isSet.template) return;

    const token =
      localStorage.getItem('userID') !== null
        ? localStorage.getItem('userID')
        : sessionStorage.getItem('userID');
    store.dispatch(setNewCurrentCVData('update', token, isSet.id, currentCv));
  }

  handleChangeTemplate = e => {
    const { id } = e.target;
    store.dispatch(changeTemplate(id));
  };

  render() {
    if (this.props.isSet === undefined) {
      return <Redirect to={path.login} />;
    }
    const { isVisible, error, language } = this.props.appState;
    const { template } = this.props.isSet;

    return (
      <>
        <NavBar language={language} />
        <StyledWrapper>
          <TemplateItem
            active={parseInt(template) === 1}
            img={temp0}
            id={1}
            changeTemplate={this.handleChangeTemplate}
          />
          <TemplateItem
            active={parseInt(template) === 2}
            img={temp1}
            id={2}
            changeTemplate={this.handleChangeTemplate}
          />
          <TemplateItem
            active={parseInt(template) === 3}
            img={temp2}
            id={3}
            changeTemplate={this.handleChangeTemplate}
          />
        </StyledWrapper>
        <TemplateSelected>{'Template ' + template + '/3'}</TemplateSelected>
        <Footer language={language} />
        <ConfirmSidePanel pose={isVisible ? 'visible' : 'hidden'} error={error} />
      </>
    );
  }
}

const MapStateToProps = ({ appState, currentCv }) => ({
  appState,
  isSet: currentCv.currentItem,
  currentCv,
});
export default connect(MapStateToProps)(Template);
