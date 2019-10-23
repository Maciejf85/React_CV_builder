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
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import Modal from 'components/organisms/Modal';
import withModal from 'components/hoc/withModal'
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
    currentTitle: '',
    currentName: '',
    currentSurname: '',
    currentEmail: '',
    currentBirthday: '',
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
          currentTitle,
        } = this.state;

        const { id } = this.props.currentCv.currentItem

        axios
          .post(`${path.cors}updatePersonalData.php`, {
            title: currentTitle,
            cvId: id,
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
      }, 2500);
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



  // CHANGE TITLE
  handleTitle = () => {
    this.setState(prevstate => ({
      changeTitle: !prevstate.changeTitle,
    }));
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
    const { modal, modalVisible, handleModal } = this.props;

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
      changeTitle,
    } = this.state;
    return (
      <>
        <Modal
          className={modal ? 'active' : ''}
          style={modalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <ImageResizer click={handleModal} imageSrc={currentImageSrc} />
        </Modal>

        <StyledWrapper>
          <StyledInputSection height="55px" titleInput>
            <div className="title">
              {changeTitle ? (
                <input
                  type="text"
                  id="currentTitle"
                  value={currentTitle}
                  onChange={this.handleForm}
                />
              ) : (
                  currentTitle
                )}
              <div>
                <PrimaryButton onClick={this.handleTitle} titleButton>
                  {changeTitle ? 'zapisz' : 'zmień tytuł'}
                </PrimaryButton>
                {changeTitle && (
                  <PrimaryButton onClick={this.handleTitle} titleButton>
                    anuluj
                  </PrimaryButton>
                )}
              </div>
            </div>
          </StyledInputSection>

          <StyledInputSection width="73%">
            <Input
              type="text"
              id="currentName"
              placeholder="imię"
              value={currentName}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              type="text"
              id="currentSurname"
              placeholder="nazwisko"
              value={currentSurname}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
              isSmall
            />
            <Input
              type="text"
              id="currentProfession"
              placeholder="zawód"
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
              placeholder="data ur."
              value={this.state.currentBirthday}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentAdress"
              placeholder="miasto, kraj"
              value={this.state.currentAdress}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentGithub"
              placeholder="github"
              value={this.state.currentGithub}
              onChange={this.handleForm}
              onBlur={this.handleStoreUpdate}
            />
            <Input
              type="text"
              id="currentLinkedin"
              placeholder="linkedIn"
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
export default withModal(connect(mapStateToProps)(UserData));