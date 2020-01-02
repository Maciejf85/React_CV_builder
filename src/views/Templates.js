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
import store from 'store';
import path from '../path';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(70vh - 50px);
  padding: 90px 50px 0;
  color: black;
`;

const TemplateSelected = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
`;

class Template extends Component {
  handleChangeTemplate = e => {
    const { id } = e.target;
    store.dispatch(changeTemplate(id));
  };

  render() {
    const { language } = this.props.appState;
    const { template } = this.props.template;
    if (this.props.isSet === undefined) {
      return <Redirect to={path.login} />;
    }

    return (
      <>
        <NavBar language={language} />
        <StyledWrapper>
          <TemplateItem
            active={template == 1}
            img={temp0}
            id={1}
            changeTemplate={this.handleChangeTemplate}
          />
          <TemplateItem
            active={template == 2}
            img={temp1}
            id={2}
            changeTemplate={this.handleChangeTemplate}
          />
          <TemplateItem
            active={template == 3}
            img={temp2}
            id={3}
            changeTemplate={this.handleChangeTemplate}
          />
        </StyledWrapper>
        <TemplateSelected>{'Template ' + template + '/3'}</TemplateSelected>
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
