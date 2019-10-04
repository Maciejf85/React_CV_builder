import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'store';
import { changeSidePanelState, updatePersonalFromState } from 'actions';
import Input from 'components/atoms/Inputs/Input';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import path from '../../../path';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 800px;
  color: black;
  padding: 10px;
  border: 3px dashed #ccc;
`;
const StyledInputSection = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  min-height: 135px;
  padding: 15px;
  border-radius: 7px;
  background: white;
  margin-bottom: 15px;
  overflow: hidden;

  img {
    max-height: 160px;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    color: white;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }
  :hover .image {
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    transition: visibility 0.6s, opacity 0.6s;
    background: rgba(0, 0, 0, 0.5);
  }
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

    const {
      name,
      surname,
      email,
      birthday,
      adress,
      github,
      linkedin,
      profession,
    } = this.props.personalData;

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
      const {
        name,
        surname,
        email,
        birthday,
        adress,
        github,
        linkedin,
        profession,
      } = this.props.personalData;

      if (prevProps.personalData.name !== name) {
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
    const {
      name,
      surname,
      email,
      birthday,
      adress,
      github,
      linkedin,
      profession,
    } = this.props.personalData;
    const { image } = this.props.image;
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
      currentImageSrc,
    } = this.state;
    return (
      <>
        <StyledWrapper>
          <StyledInputSection width="73%">
            <Input
              key="currentName"
              type="text"
              id="currentName"
              placeholder="Imię"
              value={this.state.currentName}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              key="currentSurname"
              type="text"
              id="currentSurname"
              placeholder="Nazwisko"
              value={this.state.currentSurname}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              key="currentProfession"
              type="text"
              id="currentProfession"
              placeholder="zawód"
              value={this.state.currentProfession}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
          </StyledInputSection>
          <StyledInputSection width="25%">
            <img src={image} alt="user" />
            <div className="image">
              <div>
                <PrimaryButton type="button">zmień zdjęcie</PrimaryButton>
                <PrimaryButton type="button">usuń</PrimaryButton>
              </div>
            </div>
          </StyledInputSection>
          <StyledInputSection>
            <Input
              key="currentEmail"
              type="text"
              id="currentEmail"
              placeholder="e-mail"
              value={this.state.currentEmail}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              key="currentBirthday"
              type="text"
              id="currentBirthday"
              placeholder="Data ur."
              value={this.state.currentBirthday}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              key="currentAdress"
              type="text"
              id="currentAdress"
              placeholder="Miasto, Kraj"
              value={this.state.currentAdress}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              key="currentGithub"
              type="text"
              id="currentGithub"
              placeholder="Github"
              value={this.state.currentGithub}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              key="currentLinkedin"
              type="text"
              id="currentLinkedin"
              placeholder="LinkedIn"
              value={this.state.currentLinkedin}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
          </StyledInputSection>

          <input type="file" onChange={this.handleFile} id="file" />
        </StyledWrapper>
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
        <div>{currentImageSrc}</div>
        <div>status : {statusActive.toString()}</div>
      </>
    );
  }
}

const mapStateToProps = state => ({ personalData: state.personalData, image: state.image });
export default connect(mapStateToProps)(UserData);
