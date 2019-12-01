import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Education from 'components/organisms/EditMainContent/Education';
import Experience from 'components/organisms/EditMainContent/Experience';
import Interests from 'components/organisms/EditMainContent/Interests';
import Skills from 'components/organisms/EditMainContent/Skills';
import UserData from 'components/organisms/EditMainContent/UserData';
import Languages from 'components/organisms/EditMainContent/Languages';
import Certificates from 'components/organisms/EditMainContent/Certificates';
import Courses from 'components/organisms/EditMainContent/Courses';
import Conferences from 'components/organisms/EditMainContent/Conferences';
import Publications from 'components/organisms/EditMainContent/Publications';
import Licenses from 'components/organisms/EditMainContent/Licenses';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px;
  height: (100vh - 50px);
  /* border: 1px solid red; */
  margin-top: 70px;
  margin-left: 300px;
  color: black;
  /* border: 1px solid black; */
`;

class EditMainContent extends Component {
  componentDidUpdate() {
    console.log('EditMainPage did update');
  }

  render() {
    const { currentView } = this.props.editComponentView;
    return (
      <StyledWrapper>
        {currentView === 'personal' && <UserData />}
        {currentView === 'education' && <Education />}
        {currentView === 'experience' && <Experience />}
        {currentView === 'languages' && <Languages />}
        {currentView === 'skills' && <Skills />}
        {currentView === 'interests' && <Interests />}
        {currentView === 'conferences' && <Conferences />}
        {currentView === 'courses' && <Courses />}
        {currentView === 'publications' && <Publications />}
        {currentView === 'licenses' && <Licenses />}
        {currentView === 'certificates' && <Certificates />}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ editComponentView }) => ({ editComponentView });
export default connect(mapStateToProps)(EditMainContent);
