import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.input`
  position: relative;
  width: 48px;
  height: 22px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputGrey};
  background: #ccc;
  appearance: none;
  margin: 0 10px;
  outline: none;

  &::before {
    content: '';
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: -3px;
    /* background: ${({ theme }) => theme.colors.buttonCaption}; */
    background:white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  &:checked::before {
    left: 32px;
    border: 1px solid ${({ theme }) => theme.colors.inputGrey};
    background:white;

  }
  &:hover {
    cursor: pointer;
  }
  &:checked {
    transition: all 0.3s;
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme, checkboxState }) => (checkboxState ? 'black' : theme.colors.inputGrey)};
`;

const slideCheckbox = ({ handleCheckbox, checkboxState, language }) => {
  const polishLanguage = language === 'PL';
  return (
    <>
      <StyleWrapper id="c1" type="checkbox" onChange={handleCheckbox} checked={checkboxState} />
      <Label htmlFor="c1" checkboxState={checkboxState}>
        {polishLanguage ? 'nadal trwa' : 'in progress'}
      </Label>
    </>
  );
};

export default slideCheckbox;
