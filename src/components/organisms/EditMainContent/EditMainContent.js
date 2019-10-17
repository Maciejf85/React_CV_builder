import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Confidential from 'components/organisms/EditMainContent/Confidential';
import Education from 'components/organisms/EditMainContent/Education';
import Interests from 'components/organisms/EditMainContent/Interests';
import Skills from 'components/organisms/EditMainContent/Skills';
import UserData from 'components/organisms/EditMainContent/UserData';
import Languages from 'components/organisms/EditMainContent/Languages';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px;
  height: (100vh - 50px);
  color: black;
  /* border: 1px solid black; */
`;

class EditMainContent extends Component {
  componentDidMount() {
    console.log('EditMainContent did mount');
  }

  render() {
    const { currentView } = this.props.editComponentView;
    return (
      <StyledWrapper>
        {currentView === 'personal' && <UserData />}
        {currentView === 'education' && <Education />}
        {currentView === 'languages' && <Languages />}
        {currentView === 'skills' && <Skills />}
        {currentView === 'interest' && <Interests />}
        {currentView === 'confidential' && <Confidential />}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(EditMainContent);
