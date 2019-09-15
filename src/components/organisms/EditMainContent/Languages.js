import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background: #000;
  color: white;
`;

export default class Languages extends Component {
  state = {
    name: 'Languages',
  };

  render() {
    const { name } = this.state;
    return <StyledWrapper>{name}</StyledWrapper>;
  }
}
