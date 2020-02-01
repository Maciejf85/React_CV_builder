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
import WebApi from 'components/organisms/EditMainContent/WebApi';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px;
  height: calc(100vh - 50px);
  margin-top: 70px;
  margin-left: 300px;
  color: black;

  @media ${({ theme }) => theme.media.small} {
    margin: 50px 0 0 55px;
  }
  @media ${({ theme }) => theme.media.medium} {
    margin: 50px 0 0;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin: 20px 0 0 185px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    margin: 50px 0 0 200px;
  }
  @media ${' (width:568px) and (orientation: landscape)'} {
    margin: 50px 0 0;
  }
  @media ${' (width:812px) and (orientation: landscape)'} {
    margin: 50px 0 0;
  }
  @media ${' (width:823px) and (orientation: landscape)'} {
    margin: 50px 0 0;
  }
`;

class EditMainContent extends Component {
  render() {
    const { language } = this.props;
    const { currentView } = this.props.editComponentView;
    return (
      <StyledWrapper>
        {currentView === 'personal' && <UserData language={language} />}
        {currentView === 'education' && <Education language={language} />}
        {currentView === 'experience' && <Experience language={language} />}
        {currentView === 'languages' && <Languages language={language} />}
        {currentView === 'skills' && <Skills language={language} />}
        {currentView === 'interests' && <Interests language={language} />}
        {currentView === 'conferences' && <Conferences language={language} />}
        {currentView === 'courses' && <Courses language={language} />}
        {currentView === 'publications' && <Publications language={language} />}
        {currentView === 'licenses' && <Licenses language={language} />}
        {currentView === 'certificates' && <Certificates language={language} />}
        {currentView === 'webApi' && <WebApi language={language} />}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ editComponentView }) => ({ editComponentView });
export default connect(mapStateToProps)(EditMainContent);
