import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { connect } from 'react-redux';
import Confidential from 'components/organisms/EditMainContent/Confidential';
import Education from 'components/organisms/EditMainContent/Education';
import Interests from 'components/organisms/EditMainContent/Interests';
import Skills from 'components/organisms/EditMainContent/Skills';
import UserData from 'components/organisms/EditMainContent/UserData';
import path from '../../../path';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px;
  height: (100vh - 50px);
  color: black;
  border: 1px solid black;
`;

class EditMainContent extends Component {
  handleNewUser = () => {
    const { cvData } = this.props;
    Axios.post(`${path.cors}newUser.php`, {
      data: JSON.stringify(cvData),
    })
      .then(data => {
        console.log('data', data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <StyledWrapper>
        Main Page
        <div>
          <button type="button" onClick={this.handleNewUser}>
            newfile
          </button>
        </div>
        <Confidential />
        <Education />
        <Interests />
        <Skills />
        <UserData />
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(EditMainContent);
