import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/Footer';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TemplateItem from 'components/molecules/Template';
import temp0 from 'assets/template/template_0.jpg';
import temp1 from 'assets/template/template_1.jpg';
// import temp2 from 'assets/template/template_2.jpg';
import { changeTemplate } from 'actions';
import { setNewCurrentCVData } from 'functions';
import ConfirmSidePanel from 'components/atoms/ConfirmSidePanel/ConfirmSidePanel';
import store from 'store';
import path from '../path';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: calc(70vh - 50px);
  padding: 90px 50px 0;
  color: black;
  @media ${({ theme }) => theme.media.small} {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
  @media ${({ theme }) => theme.media.medium} {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    align-items: center;
  }
`;

class Template extends Component {
  componentDidUpdate(prevProps) {
    const { isSet, currentCv } = this.props;
    if (isSet !== undefined) {
      if (prevProps.isSet.template === isSet.template) return;

      const token =
        localStorage.getItem('userID') !== null
          ? localStorage.getItem('userID')
          : sessionStorage.getItem('userID');
      store.dispatch(setNewCurrentCVData('update', token, isSet.id, currentCv));
    }
  }

  handleChangeTemplate = e => {
    const { id } = e.target;
    store.dispatch(changeTemplate(id));
  };

  render() {
    const { currentCv } = this.props;

    if (!Object.entries(currentCv).length) {
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
            img={temp1}
            id={3}
            changeTemplate={this.handleChangeTemplate}
          />
          <TemplateItem
            active={parseInt(template) === 4}
            img={temp1}
            id={4}
            changeTemplate={this.handleChangeTemplate}
          />
        </StyledWrapper>
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
