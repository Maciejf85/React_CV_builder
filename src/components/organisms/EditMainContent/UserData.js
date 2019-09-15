import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px;
  background: #000;
  color: white;
`;

export default class UserData extends Component {
  state = {
    name: 'UserData',
  };

  render() {
    const { name } = this.state;
    return <StyledWrapper>{name}</StyledWrapper>;
  }
}
