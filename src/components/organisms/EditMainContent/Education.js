import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background: #000;
  color: white;
`;

export default class Education extends Component {
  state = {
    name: 'Education',
  };

  render() {
    const { name } = this.state;
    return <StyledWrapper>{name}</StyledWrapper>;
  }
}
