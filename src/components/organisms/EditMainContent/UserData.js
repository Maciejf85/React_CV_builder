import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  color: black;
`;

class UserData extends Component {
  componentDidMount() {
    console.log('UserData did mount');
  }

  render() {
    const { name, surname, email, birthday, adress, github, linkedin, profession } = this.props;
    return (
      <StyledWrapper>
        <div>{name}</div>
        <div>{surname}</div>
        <div>{email}</div>
        <div>{birthday}</div>
        <div>{adress}</div>
        <div>{github}</div>
        <div>{linkedin}</div>
        <div>{profession}</div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.personalData;
export default connect(mapStateToProps)(UserData);
