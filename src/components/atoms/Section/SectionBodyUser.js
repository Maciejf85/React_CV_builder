import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';

const StyledWrapper = styled.div`
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
`;

class SectionBody extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    adress: '',
    birthday: '',
    github: '',
    linkedin: '',
    edit: false,
  };

  handleEdit = () => {
    const { edit } = this.state;

    if (!edit) {
      this.setState({
        name: this.props.name,
        surname: this.props.surname,
        adress: this.props.adress,
        email: this.props.email,
        birthday: this.props.birthday,
        github: this.props.github,
        linkedin: this.props.linkedin,
        edit: true,
      });
    } else {
      this.setState({
        edit: false,
      });
    }
  };

  handleToggleEdit = () => {
    this.setState({
      edit: false,
    });
  };

  handleForm = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { edit } = this.state;
    const { name, surname, email, adress, birthday, github, linkedin } = this.props;
    return (
      <StyledWrapper>
        <div className="header">
          <h1>Twoje konto</h1>
          <div>
            <PrimaryButton type="button" primary={!!edit} onClick={this.handleEdit}>
              {!edit ? 'edytuj' : 'zapisz'}
            </PrimaryButton>
            {edit && (
              <PrimaryButton type="button" onClick={this.handleToggleEdit}>
                anuluj
              </PrimaryButton>
            )}
          </div>
        </div>
        {!edit ? (
          <ul>
            <li>
              <span>imię </span> {name}
            </li>
            <li>
              <span>nazwisko </span> {surname}
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
        ) : (
          <form>
            <span>imię </span>
            <input type="text" name="name" value={this.state.name} onChange={this.handleForm} />
            <span>nazwisko </span>
            <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleForm}
            />
            <span>email </span>
            <input type="text" name="email" disabled readOnly value={this.state.email} />
            <span>adres </span>
            <input type="text" name="adress" value={this.state.adress} onChange={this.handleForm} />
            <span>data urodzenia: </span>
            <input
              type="date"
              name="birthday"
              value={this.state.birthday}
              onChange={this.handleForm}
            />
            <span>github: </span>
            <input type="text" name="github" value={this.state.github} onChange={this.handleForm} />
            <span>github: </span>
            <input
              type="text"
              name="linkedin"
              value={this.state.linkedin}
              onChange={this.handleForm}
            />
          </form>
        )}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.userData;

export default connect(mapStateToProps)(SectionBody);

// TODO: 1) zamiana formularza na formik, 2) dodanie akcji wysyłającej stan do store, 3) stworzenie pliku na serwerze, pobieranie <-> wysyłanie danych z serwera
