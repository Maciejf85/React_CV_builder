/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'store';
import { updatePersonalFromState, updateImage } from 'actions';
import { updatePersonalData } from 'functions';
import Input from 'components/atoms/Inputs/Input';
import ImageOptionButton from 'components/atoms/Buttons/ImageOptionButton';
import ImageOptionLabel from 'components/atoms/Buttons/ImageOptionLabel';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import Modal from 'components/organisms/Modal';
import withModal from 'components/hoc/withModal';
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

  @media ${({ theme }) => theme.media.small} {
    flex-direction: column;
    width: 100%;
  }
  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  }
`;

class UserData extends Component {
  state = {
    statusActive: false,
    currentTitle: '',
    currentTempTitle: '',
    currentName: '',
    currentSurname: '',
    currentEmail: '',
    currentPhone: '',
    currentBirthday: '',
    birthdayValid: false,
    currentAdress: '',
    currentGithub: '',
    currentLinkedin: '',
    currentProfession: '',
    currentImageSrc: undefined,
    changeTitle: false,
  };

  componentDidMount() {
    this.mounted = true;

    const {
      name,
      surname,
      email,
      phone,
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
      currentPhone: phone,
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
        phone,
        birthday,
        adress,
        github,
        linkedin,
        profession,
      } = this.props.personalData;

      if (prevProps.personalData.name !== name) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          currentName: name,
          currentSurname: surname,
          currentEmail: email,
          currentPhone: phone,
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

  handleTimer = (time = 1000) => {
    if (this.mounted) {
      setTimeout(() => {
        const token = sessionStorage.getItem('userID');
        const { id } = this.props.currentCv.currentItem;
        updatePersonalData(this.state, id, token);

        if (this.mounted) {
          this.setState({
            statusActive: false,
          });
        }
      }, time);
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
            this.props.handleModal();
          };
        } else {
          alert('Akceptowalne rozszerzenia plików : jpg , jpeg, png');
        }
      }
      e.target.value = null;
    } else if (actiontype === 'remove') {
      store.dispatch(updateImage(null));
      axios
        .post(`${path.cors}removeImage.php`, {
          token: sessionStorage.getItem('userID'),
        })
        .then(request => console.log(request));
    }
  };

  // HANDLE FORM

  handleForm = (e, test = true) => {
    const { statusActive } = this.state;
    if (e.target.dataset.id !== 'currentTitle') {
      this.setState({
        [e.target.dataset.id]: e.target.value,
      });
      if (!statusActive && test) {
        this.handleTimer();
        this.setState({
          statusActive: true,
        });
      }
    } else {
      this.setState({
        [e.target.dataset.id]: e.target.value,
      });
    }
  };

  handleDateValidation = e => {
    const { value } = e.target;
    const reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
    const test = value !== '' ? reg.test(value) : true;

    // eslint-disable-next-line no-unused-expressions
    test ? this.setState({ birthdayValid: false }) : this.setState({ birthdayValid: true });

    if (value.length <= 10) {
      this.handleForm(e, test);
    }
  };

  // UPDATE STORE PERSONAL DATA

  handleStoreUpdate = () => {
    store.dispatch(updatePersonalFromState(this.state));
  };

  // CHANGE TITLE

  handleTitle = e => {
    const { id } = e.target;
    const { currentTitle, changeTitle, currentTempTitle } = this.state;

    // change title is active set temp title

    if (!changeTitle) {
      this.setState({ currentTempTitle: currentTitle });
    }

    if (id === 'save') {
      this.setState(prevstate => ({
        changeTitle: !prevstate.changeTitle,
      }));

      // SEND WHOLE DATA TO SERVER
      return this.state.changeTitle ? this.handleTimer(0) : null;
    }
    return this.setState({
      changeTitle: false,
      currentTitle: currentTempTitle,
    });
  };

  render() {
    const { image } = this.props.image;
    const { modal, modalVisible, handleModal, language } = this.props;
    const polishLanguage = language === 'PL';

    const {
      currentTitle,
      currentName,
      currentSurname,
      currentEmail,
      currentPhone,
      currentBirthday,
      currentAdress,
      currentGithub,
      currentLinkedin,
      currentProfession,
      currentImageSrc,
      changeTitle,
      birthdayValid,
    } = this.state;
    return (
      <>
        <Modal
          className={modal ? 'active' : ''}
          style={modalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <ImageResizer click={handleModal} imageSrc={currentImageSrc} language={language} />
        </Modal>

        <StyledWrapper>
          <StyledInputSection height="55px" titleInput>
            <div className="title">
              {changeTitle ? (
                <input
                  type="text"
                  data-id="currentTitle"
                  value={currentTitle}
                  onChange={this.handleForm}
                  autoFocus
                />
              ) : (
                currentTitle
              )}
              <div>
                <PrimaryButton id="save" onClick={this.handleTitle} titleButton>
                  {polishLanguage
                    ? changeTitle
                      ? 'zapisz'
                      : 'zmień tytuł'
                    : changeTitle
                    ? 'save'
                    : 'change title'}
                </PrimaryButton>
                {changeTitle && (
                  <PrimaryButton id="cancel" onClick={this.handleTitle} titleButton>
                    {polishLanguage ? 'anuluj' : 'cancel'}
                  </PrimaryButton>
                )}
              </div>
            </div>
          </StyledInputSection>

          <StyledInputSection width="73%">
            <Input
              type="text"
              id="currentName"
              placeholder={polishLanguage ? 'imię' : 'name'}
              value={currentName}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              type="text"
              id="currentSurname"
              placeholder={polishLanguage ? 'nazwisko' : 'surname'}
              value={currentSurname}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              type="text"
              id="currentProfession"
              placeholder={polishLanguage ? 'zawód' : 'profession'}
              value={currentProfession}
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
                      {polishLanguage ? 'zmień zdjęcie' : 'change image'}
                    </ImageOptionLabel>
                    <ImageOptionButton
                      type="button"
                      data-actiontype="remove"
                      onClick={this.handleImage}
                    >
                      {polishLanguage ? 'usuń zdjęcie' : 'delete image'}
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
                {polishLanguage ? 'dodaj zdjęcie' : 'add image'}
              </ImageOptionLabel>
            )}
          </StyledInputSection>
          <StyledInputSection>
            <Input
              type="text"
              id="currentEmail"
              placeholder="e-mail"
              value={currentEmail}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentPhone"
              placeholder={polishLanguage ? 'telefon' : 'phone'}
              value={currentPhone}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentBirthday"
              placeholder={polishLanguage ? 'data ur' : 'birthday'}
              value={currentBirthday}
              onChange={this.handleDateValidation}
              onBlur={this.handleStoreUpdate}
              error={birthdayValid}
              tip={(polishLanguage ? 'format daty' : 'date format') + ' xxxx-xx-xx'}
            />
            <Input
              type="text"
              id="currentAdress"
              placeholder={polishLanguage ? 'miasto, kraj' : 'city, country'}
              value={currentAdress}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentGithub"
              placeholder="github"
              value={currentGithub}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentLinkedin"
              placeholder="linkedIn"
              value={currentLinkedin}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
          </StyledInputSection>
        </StyledWrapper>
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
    title: 'CV #',
  }),
};

const mapStateToProps = ({ personalData, image, currentCv }) => ({
  personalData,
  image,
  currentCv,
});
export default withModal(connect(mapStateToProps)(UserData));
