import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  width: 15px;
  height: 15px;
  outline: none;
  border: none;
  background: ${({ color }) => color || 'black'};
  padding: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  border-radius: 50%;
  border: 1px solid darkgray;

  &:hover {
    cursor: pointer;
  }
  &.active {
    transform: scale(1.3);
  }
`;

const ColorButton = ({ color, active }) => {
  console.log('active', active);
  return (
    <StyledWrapper
      type="button"
      onClick={() => alert(active.toString())}
      color={color}
      className={active ? 'active' : null}
    />
  );
};

export default ColorButton;
