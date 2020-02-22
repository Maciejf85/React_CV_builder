import React from 'react';
import styled from 'styled-components';
import { changeTemplateColor } from 'actions';
import store from 'store';

const StyledWrapper = styled.button`
  width: 18px;
  height: 18px;
  outline: none;
  border: none;
  background: ${({ color }) => color || 'black'};
  padding: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  /* border-radius: 50%; */
  border: 1px solid darkgray;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  &.active {
    transform: scale(1.4);
  }
`;

const ColorButton = ({ color, active, id }) => {
  return (
    <StyledWrapper
      type="button"
      onClick={() => store.dispatch(changeTemplateColor(id))}
      color={color}
      className={active ? 'active' : null}
    />
  );
};

export default ColorButton;
