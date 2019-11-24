import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getNewItemName } from 'functions';

const StyledWrapper = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border: 2px dashed ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.inputGrey};
  font-weight: ${({ theme }) => theme.font.thin};
  letter-spacing: 3px;
  background: white;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonCaption};
    cursor: pointer;
  }
  span {
    color: ${({ theme }) => theme.colors.lightBlue};
    margin: 0 5px;
  }
`;

const NewItemButton = ({ view, handleClick }) => {
  return (
    <StyledWrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} />
      <span>{` dodaj ${getNewItemName(view)}`}</span>
    </StyledWrapper>
  );
};

export default NewItemButton;
