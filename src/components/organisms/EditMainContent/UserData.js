import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'store';
import { changeSidePanelState, updatePersonalFromState } from 'actions';
import Input from 'components/atoms/Inputs/Input';
import personalData from 'data/personalDataValues';
import path from '../../../path';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  color: black;
  padding: 10px;
  border: 3px dashed #ccc;
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
    currentImage: undefined,
    currentImageSrc: undefined,
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
        setTimeout(() => store.dispatch(changeSidePanelState(false)), 2100);
      }, 3500);
    }
  };

  handleFile = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];

      console.log('file.type', file.type);
      console.log('file.name', file);
      console.log('file.name', file.name);
      console.log('file.size', (file.size / 1024).toFixed(2), 'Kb');
      console.log('lastModifiedDate', file.lastModifiedDate.toLocaleString());
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        this.setState({
          currentImageSrc: img.src,
        });
      };
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
        {personalData.map(item => (
          <Input
            key={item.id}
            type={item.type}
            id={item.id}
            placeholder={item.placeholder}
            value={this.state[item.value]}
            onChange={this.handleForm}
            onBlur={this.handleStoreUpdate}
          />
        ))}
        <Input type="file" onChange={this.handleFile} accept="image/*" />

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
        <div>{this.state.currentImage ? this.state.currentImage.name : undefined}</div>
        <div>{this.state.currentImageSrc ? this.state.currentImageSrc : undefined}</div>
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
        <img src={this.state.currentImageSrc} width="300px" alt="contentInside" />
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.personalData;
export default connect(mapStateToProps)(UserData);
