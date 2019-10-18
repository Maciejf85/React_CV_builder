import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'store';
import { updatePersonalFromState, updateImage } from 'actions';
import { sidePanel } from 'functions';
import Input from 'components/atoms/Inputs/Input';
import ImageOptionButton from 'components/atoms/Buttons/ImageOptionButton';
import ImageOptionLabel from 'components/atoms/Buttons/ImageOptionLabel';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Modal from 'components/organisms/Modal';
import ImageResizer from 'components/organisms/ImageResizer';
import PropTypes from 'prop-types';
import path from '../../../path';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 800px;
  color: black;
  padding: 10px;
  /* border: 3px dashed #ccc; */
`;

const Data = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  font-size: 13px;
`;

class UserData extends Component {
  state = {
    statusActive: false,
    currentTitle: 'nowe CV',
    currentName: '',
    currentSurname: '',
    currentEmail: '',
    currentBirthday: '',
    currentAdress: '',
    currentGithub: '',
    currentLinkedin: '',
    currentProfession: '',
    currentImageSrc: undefined,
    isModal: false,
    isModalVisible: false,
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
    const { currentItem } = this.props.currentCv;
    const { title } = currentItem;

    this.setState({
      currentName: name,
      currentSurname: surname,
      currentEmail: email,
      currentBirthday: birthday,
      currentAdress: adress,
      currentGithub: github,
      currentLinkedin: linkedin,
      currentProfession: profession,
      currentTitle: title,
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
            sidePanel({ content: 'dane zapisane', error: false });
          })
          .catch(error => {
            console.log('error :', error);
            sidePanel({ content: 'błąd zapisu', error: true });
          });
        if (this.mounted) {
          this.setState({
            statusActive: false,
          });
        }
      }, 3500);
    }
  };

  // HANDLE IMAGE FILE

  handleImage = e => {
    const { actiontype } = e.target.dataset;

    if (actiontype === 'add') {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        const accepted = ['image/jpeg', 'image/jpg', 'image/png'];
        // imageBase64Data
        const reader = new FileReader();
        if (accepted.includes(file.type)) {
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.setState({
              currentImageSrc: reader.result,
            });
            this.handleModal();
          };
        } else {
          alert('Akceptowalne rozszerzenia plików : jpg , jpeg, png');
        }
      }
      e.target.value = null;
    } else if (actiontype === 'remove') {
      store.dispatch(updateImage(null));
      axios.post(`${path.cors}removeImage.php`);
    }
  };

  // HANDLE FORM

  handleForm = e => {
    this.setState({
      [e.target.id]: e.target.value,
      statusActive: true,
    });

    if (!this.state.statusActive) {
      this.handleTimer();
    }
  };

  // UPDATE STORE FORM DATA

  handleStoreUpdate = () => {
    store.dispatch(updatePersonalFromState(this.state));
  };

  // HANDLE MODAL

  handleModal = () => {
    const { isModal } = this.state;
    let modalDisplay;
    let modalClass;

    if (!isModal) {
      modalDisplay = 0;
      modalClass = 550;
    } else {
      modalDisplay = 750;
      modalClass = 0;
    }

    setTimeout(
      () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible })),
      modalDisplay,
    );
    setTimeout(() => this.setState(prevState => ({ isModal: !prevState.isModal })), modalClass);
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
      currentTitle,
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
      isModal,
      isModalVisible,
    } = this.state;
    return (
      <>
        <Modal
          className={isModal ? 'active' : ''}
          style={isModalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <ImageResizer click={this.handleModal} imageSrc={currentImageSrc} />
        </Modal>
        <StyledWrapper>
          <StyledInputSection height="50px">{currentTitle}</StyledInputSection>
          <StyledInputSection width="73%">
            <Input
              type="text"
              id="currentName"
              placeholder="Imię"
              value={this.state.currentName}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              type="text"
              id="currentSurname"
              placeholder="Nazwisko"
              value={this.state.currentSurname}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              type="text"
              id="currentProfession"
              placeholder="zawód"
              value={this.state.currentProfession}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
          </StyledInputSection>
          <StyledInputSection width="25%">
            {image ? (
              <>
                <img src={image} alt="user" />
                <div className="image">
                  <div>
                    <ImageOptionLabel htmlFor="imageInput">
                      <input
                        type="file"
                        data-actiontype="add"
                        onChange={this.handleImage}
                        id="imageInput"
                        style={{ display: 'none' }}
                      />
                      zmień zdjęcie
                    </ImageOptionLabel>
                    <ImageOptionButton
                      type="button"
                      data-actiontype="remove"
                      onClick={this.handleImage}
                    >
                      usuń zdjęcie
                    </ImageOptionButton>
                  </div>
                </div>
              </>
            ) : (
              <ImageOptionLabel htmlFor="imageInput" active={!image}>
                <input
                  type="file"
                  data-actiontype="add"
                  onChange={this.handleImage}
                  id="imageInput"
                  style={{ display: 'none' }}
                />
                dodaj zdjęcie
              </ImageOptionLabel>
            )}
          </StyledInputSection>
          <StyledInputSection>
            <Input
              type="text"
              id="currentEmail"
              placeholder="e-mail"
              value={this.state.currentEmail}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentBirthday"
              placeholder="Data ur."
              value={this.state.currentBirthday}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentAdress"
              placeholder="Miasto, Kraj"
              value={this.state.currentAdress}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentGithub"
              placeholder="Github"
              value={this.state.currentGithub}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentLinkedin"
              placeholder="LinkedIn"
              value={this.state.currentLinkedin}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
          </StyledInputSection>
        </StyledWrapper>
        <Data>
          <div>
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
          </div>
          <div>
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
          </div>
        </Data>
      </>
    );
  }
}

UserData.propTypes = {
  currentCv: PropTypes.shape({
    title: PropTypes.string,
  }),
};
UserData.defaultProps = {
  currentCv: PropTypes.shape({
    title: 'nowe CV',
  }),
};
const mapStateToProps = state => ({
  personalData: state.personalData,
  image: state.image,
  currentCv: state.currentCv,
});
export default connect(mapStateToProps)(UserData);
