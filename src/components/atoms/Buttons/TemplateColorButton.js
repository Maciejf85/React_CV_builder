import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  width: 15px;
  height: 15px;
  outline: none;
  border: none;
  background: ${({ color }) => color || 'black'};
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ColorButton = ({ color }) => {
  return <StyledWrapper type="button" onClick={() => alert('clicked')} color={color} />;
};

export default ColorButton;
