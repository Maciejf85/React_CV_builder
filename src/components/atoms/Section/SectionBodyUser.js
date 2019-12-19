import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import ImageOptionButton from 'components/atoms/Buttons/ImageOptionButton';
import ImageOptionLabel from 'components/atoms/Buttons/ImageOptionLabel';
import Modal from 'components/organisms/Modal';
import withModal from 'components/hoc/withModal';
import store from 'store';
import { updateImage } from 'actions';
import axios from 'axios';
import ImageResizer from 'components/organisms/ImageResizer';
import { reverseDate, sidePanel } from 'functions/';
import path from '../../../path';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  /* border: 1px solid black; */
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  line-height: 25px;
  p {
    cursor: default;
    user-select: none;
  }
  span {
    display: inline-block;
    width: 140px;
    font-weight: ${({ theme }) => theme.font.bold};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: black;
    @media ${({ theme }) => theme.media.small} {
      width: calc(100vw / 3);
    }
    @media ${({ theme }) => theme.media.medium} {
      width: calc(100vw / 3);
    }
  }
  li {
    font-size: ${({ theme }) => theme.fontSize.ms};
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.secondaryGrey};
    @media ${({ theme }) => theme.media.small} {
      padding: 0 10px;
    }
  }
  a {
    text-decoration: underline;
  }
  .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    h1 {
      margin: 20px 0 0;
    }
    span {
      line-height: 15px;
      /* margin-left: 15px; */
      width: 100%;
      font-style: italic;
      text-transform: lowercase;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: ${({ theme }) => theme.font.normal};
    }
    @media ${({ theme }) => theme.media.small} {
      padding: 0 10px;
    }
  }
  .imageContent {
    width: 174px;
    height: 200px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    /* flex-grow: 2; */
  }
  .firstContainer {
    /* flex-grow: 7; */
  }
  @media ${({ theme }) => theme.media.small} {
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px 0;
    margin-bottom: 20px;
    min-height: auto;
  }
`;
class SectionBody extends Component {
  state = {
    currentImageSrc: undefined,
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
        .then(() => sidePanel({ content: 'zdjęcie usunięte', error: false }))
        .catch(() => {
          sidePanel({ content: 'błąd', error: true });
        });
    }
  };

  render() {
    const {
      name,
      surname,
      email,
      adress,
      birthday,
      github,
      linkedin,
      created,
      profession,
    } = this.props.personalData;
    const { image } = this.props.image;
    const { modal, modalVisible, handleModal, language } = this.props;
    const { currentImageSrc, fileSize } = this.state;
    const polishLanguage = language === 'PL';

    return (
      <>
        <Modal
          className={modal ? 'active' : ''}
          style={modalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <ImageResizer
            click={handleModal}
            imageSrc={currentImageSrc}
            imageSize={fileSize}
            language={language}
          />
        </Modal>
        <StyledWrapper>
          <div className="firstContainer">
            <div className="header">
              <h1>{profession}</h1>
              <span>{` ${polishLanguage ? 'utworzone' : 'created'} ${reverseDate(created)} `}</span>
            </div>
            <ul>
              <li>
                <span>{polishLanguage ? 'imię' : 'name'}</span> {name}
              </li>
              <li>
                <span>{polishLanguage ? 'nazwisko' : 'surname'}:</span> {surname}
              </li>
              <li>
                <span>email:</span> {email}
              </li>
              <li>
                <span>{polishLanguage ? 'adres' : 'address'}:</span> {adress}
              </li>
              <li>
                <span>{polishLanguage ? 'data urodzenia' : 'birthday'}</span>
                {reverseDate(birthday)}
              </li>
              <li>
                <span>github:</span>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {github}
                </a>
              </li>
              <li>
                <span>linkedin:</span>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  {linkedin}
                </a>
              </li>
            </ul>
          </div>

          <StyledInputSection width="25%" white className="imageContent">
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
        </StyledWrapper>
      </>
    );
  }
}

SectionBody.propTypes = {
  personalData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    adress: PropTypes.string,
    birthday: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    profession: PropTypes.string,
    created: PropTypes.string,
  }),
  image: PropTypes.shape({
    image: PropTypes.string,
  }),
};
SectionBody.defaultProps = {
  personalData: PropTypes.shape({
    name: 'puste',
    surname: 'puste',
    email: 'puste',
    adress: 'puste',
    birthday: 'puste',
    github: 'puste',
    linkedin: 'puste',
    profession: 'puste',
    created: 'puste',
  }),
  image: PropTypes.shape({
    image: '',
  }),
};

const mapStateToProps = ({ personalData, image, appState }) => ({
  personalData,
  image,
  language: appState.language,
});

export default withModal(connect(mapStateToProps)(SectionBody));
