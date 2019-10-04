import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reverseDate } from 'data/formatDate';

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
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    h1 {
      margin: 20px 0 0;
    }
    span {
      line-height: 15px;
      margin-left: 15px;
      width: 100%;
      font-style: italic;
      text-transform: lowercase;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: ${({ theme }) => theme.font.normal};
    }
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
const SectionBody = props => {
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
  } = props.personalData;
  const { image } = props.image;
  return (
    <StyledWrapper>
      <div className="header">
        <h1>{profession}</h1>
        <span>{`( utworzone ${reverseDate(created)} )`}</span>
      </div>
      <ul>
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
          <span>data urodzenia:</span> {reverseDate(birthday)}
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
      <img src={image} alt="user" />
    </StyledWrapper>
  );
};

SectionBody.propTypes = {
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
  adress: 'puste',
  birthday: 'puste',
  github: 'puste',
  linkedin: 'puste',
};

const mapStateToProps = state => ({ personalData: state.personalData, image: state.image });

export default connect(mapStateToProps)(SectionBody);
