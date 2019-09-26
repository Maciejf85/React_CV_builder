import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import path from '../../../path';

const StyledWrapper = styled.div`
  width: 100%;
  color: black;
`;

class UserData extends Component {
  state = {
    currentName: '',
    currentSurname: '',
    currentEmail: '',
    currentBirthday: '',
    currentAdress: '',
    currentGithub: '',
    currentLinkedin: '',
    currentProfession: '',
  };

  componentDidMount() {
    const { name, surname, email, birthday, adress, github, linkedin, profession } = this.props;

    this.setState({
      currentName: name,
      currentSurname: surname,
      currentEmail: email,
      currentBirthday: birthday,
      currentAdress: adress,
      currentGithub: github,
      currentLinkedin: linkedin,
      currentProfession: profession,
    });
  }

  handleForm = e => {
    this.setState({
      [e.target.name]: [e.target.value],
    });

    axios
      .post(`${path.cors}updatePersonalData.php`)
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  };

  render() {
    const { name, surname, email, birthday, adress, github, linkedin, profession } = this.props;
    const {
      currentName,
      currentSurname,
      currentEmail,
      currentBirthday,
      currentAdress,
      currentGithub,
      currentLinkedin,
      currentProfession,
    } = this.state;
    return (
      <StyledWrapper>
        <input
          type="text"
          name="currentName"
          placeholder="imię"
          value={currentName}
          onChange={this.handleForm}
        />
        <div>----------store values-----------</div>
        <div>{name}</div>
        <div>{surname}</div>
        <div>{email}</div>
        <div>{birthday}</div>
        <div>{adress}</div>
        <div>{github}</div>
        <div>{linkedin}</div>
        <div>{profession}</div>
        <div>-------------state values----------</div>
        <div>{currentName}</div>
        <div>{currentSurname}</div>
        <div>{currentEmail}</div>
        <div>{currentBirthday}</div>
        <div>{currentAdress}</div>
        <div>{currentGithub}</div>
        <div>{currentLinkedin}</div>
        <div>{currentProfession}</div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.personalData;
export default connect(mapStateToProps)(UserData);
