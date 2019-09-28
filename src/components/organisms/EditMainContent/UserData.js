import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'store';
import { changeSidePanelState, updatePersonalFromState } from 'actions';
import { Input } from 'components/atoms/Inputs/index';
import path from '../../../path';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  color: black;
  padding: 10px;
  border: 1px solid red;
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
    this.updated = true;

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
        axios
          .post(`${path.cors}updatePersonalData.php`, {
            name: currentName,
            surname: currentSurname,
            email: currentEmail,
            birthday: currentBirthday,
            adress: currentAdress,
            github: currentGithub,
            linkedin: currentLinkedin,
            profession: currentProfession,
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
      [e.target.id]: e.target.value,
      statusActive: true,
    });
    if (!this.state.statusActive) {
      this.handleTimer();
    }
  };

  handleStoreUpdate = () => {
    store.dispatch(updatePersonalFromState(this.state));
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
        <Input
          type="text"
          id="currentName"
          placeholder="imię"
          value={currentName}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />
        <Input
          type="text"
          id="currentSurname"
          placeholder="nazwisko"
          value={currentSurname}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />
        <Input
          type="text"
          id="currentEmail"
          placeholder="email"
          value={currentEmail}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />

        <Input
          type="text"
          id="currentBirthday"
          placeholder="data urodzenia"
          value={currentBirthday}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />

        <Input
          type="text"
          id="currentAdress"
          placeholder="miasto , kraj"
          value={currentAdress}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />
        <Input
          type="text"
          id="currentGithub"
          placeholder="konto na github"
          value={currentGithub}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />
        <Input
          type="text"
          id="currentLinkedin"
          placeholder="konto na linkedin"
          value={currentLinkedin}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
        />
        <Input
          type="text"
          id="currentProfession"
          placeholder="zawód"
          value={currentProfession}
          onChange={this.handleForm}
          onBlur={this.handleStoreUpdate}
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
