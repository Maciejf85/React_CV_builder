import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'store';
import { changeSidePanelState } from 'actions';
import path from '../../../path';

const StyledWrapper = styled.div`
  width: 100%;
  color: black;
`;

class UserData extends Component {
  state = {
    statusActive: false,
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
    this.mounted = true;
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

  componentDidUpdate(prevProps) {
    if (this.mounted) {
      const { name, surname, email, birthday, adress, github, linkedin, profession } = this.props;
      if (prevProps.name !== name) {
        console.log('component did update');
        // eslint-disable-next-line react/no-did-update-set-state
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
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleTimer = () => {
    if (this.mounted) {
      setTimeout(() => {
        axios
          .post(`${path.cors}updatePersonalData.php`, {
            name: this.state.currentName,
            surname: this.state.currentSurname,
            email: this.state.currentEmail,
            token: sessionStorage.getItem('userID'),
          })
          .then(result => {
            console.log('result', result.data);
            store.dispatch(changeSidePanelState(false));
          })
          .catch(error => {
            console.log('error :', error);
            store.dispatch(changeSidePanelState(true));
          });
        if (this.mounted) {
          this.setState({
            statusActive: false,
          });
        }
        setTimeout(() => store.dispatch(changeSidePanelState(false)), 2000);
      }, 3500);
    }
  };

  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value,
      statusActive: true,
    });
    if (!this.state.statusActive) {
      this.handleTimer();
    }
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
      statusActive,
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
        <input
          type="text"
          name="currentSurname"
          placeholder="nazwisko"
          value={currentSurname}
          onChange={this.handleForm}
        />
        <input
          type="text"
          name="currentEmail"
          placeholder="email"
          value={currentEmail}
          onChange={this.handleForm}
        />
        <div> </div>
        <div>----------store values-----------</div>
        <div>{name}</div>
        <div>{surname}</div>
        <div>{email}</div>
        <div>{birthday}</div>
        <div>{adress}</div>
        <div>{github}</div>
        <div>{linkedin}</div>
        <div>{profession}</div>
        <div> </div>
        <div>-------------state values----------</div>
        <div>{currentName}</div>
        <div>{currentSurname}</div>
        <div>{currentEmail}</div>
        <div>{currentBirthday}</div>
        <div>{currentAdress}</div>
        <div>{currentGithub}</div>
        <div>{currentLinkedin}</div>
        <div>{currentProfession}</div>
        <div>status : {statusActive.toString()}</div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.personalData;
export default connect(mapStateToProps)(UserData);
