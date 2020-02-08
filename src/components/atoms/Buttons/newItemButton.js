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
  border: 2px dashed ${({ theme }) => theme.colors.inputGrey};
  color: ${({ theme }) => theme.colors.inputGrey};
  font-weight: ${({ theme }) => theme.font.normal};
  letter-spacing: 2px;
  background: white;
  transition: all 0.3s;

  /* &:hover {
    color: ${({ theme }) => theme.colors.buttonCaption};
    cursor: pointer;
  } */
  div {
  transition: all 0.3s;
    color: ${({ theme }) => theme.colors.inputGrey};
    margin: 0 5px;
    &:hover {
    color: ${({ theme }) => theme.colors.buttonCaption};
    font-weight: ${({ theme }) => theme.font.bold};
    cursor:pointer;
    }
  }
`;

const NewItemButton = ({ view, handleClick, language }) => {
  const polishLanguage = language === 'PL';
  return (
    <StyledWrapper onClick={handleClick}>
      <div>
        <FontAwesomeIcon icon={faPlus} />
        {polishLanguage ? (
          <span>{` dodaj ${getNewItemName(view)}`}</span>
        ) : (
          <span>{` add new item`}</span>
        )}
      </div>
    </StyledWrapper>
  );
};

export default NewItemButton;
