import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: relative;
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
  }
  li {
    font-size: ${({ theme }) => theme.fontSize.ms};
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.secondaryGrey};
  }
  a {
    text-decoration: underline;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  input {
    display: inline-block;
    width: 100%;
    padding: 5px;
  }
  img {
    position: absolute;
    top: 27px;
    right: 27px;
    width: 100px;
    border-radius: 5px;
    overflow: hidden;
  }
`;
const path = 'http://www.maciejf.pl/cv-builder/';
const SectionBody = props => {
  const { id, name, surname, email, adress, birthday, github, linkedin } = props;
  return (
    <StyledWrapper>
      <div className="header">
        <h1>Twoje konto</h1>
      </div>
      <ul>
        <li>
          <span>ID:</span> {id}
        </li>
        <li>
          <span>imię:</span> {name}
        </li>
        <li>
          <span>nazwisko:</span> {surname}
        </li>
        <li>
          <span>email:</span> {email}
        </li>
        <li>
          <span>adres:</span> {adress}
        </li>
        <li>
          <span>data urodzenia:</span> {birthday}
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
      <img src={`${path}users/${id}/images/pic1.jpg`} alt="user" />
    </StyledWrapper>
  );
};

SectionBody.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  adress: PropTypes.string,
  birthday: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};
SectionBody.defaultProps = {
  name: 'puste',
  surname: 'puste',
  email: 'puste',
  adress: PropTypes.string,
  birthday: 'puste',
  github: 'puste',
  linkedin: 'puste',
};

const mapStateToProps = state => state.userData;

export default connect(mapStateToProps)(SectionBody);

// TODO: 1) zamiana formularza na formik, 2) dodanie akcji wysyłającej stan do store, 3) stworzenie pliku na serwerze, pobieranie <-> wysyłanie danych z serwera
