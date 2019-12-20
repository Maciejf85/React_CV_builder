import React, { Component } from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.input`
  position: relative;
  width: 48px;
  height: 22px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputGrey};
  appearance: none;
  margin: 0 10px;
  outline: none;

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 0px;
    background: ${({ theme }) => theme.colors.buttonActive};
    transition: all 0.3s;
  }
  &:checked::before {
    left: 29px;
    background: ${({ theme }) => theme.colors.buttonActive};
  }
  &:hover {
    cursor: pointer;
  }
  &:checked {
    transition: all 0.3s;
    background: ${({ theme }) => theme.colors.inputGrey};
  }
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.font.bold};
`;

const slideCheckbox = ({ handleCheckbox, checkboxState, language }) => {
  const polishLanguage = language === 'PL';
  return (
    <>
      <StyleWrapper id="c1" type="checkbox" onChange={handleCheckbox} checked={checkboxState} />
      <Label htmlFor="c1">{polishLanguage ? 'nadal trwa' : 'in progress'}</Label>
    </>
  );
};

export default slideCheckbox;
