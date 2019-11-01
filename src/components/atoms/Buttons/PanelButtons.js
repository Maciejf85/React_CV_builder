import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  outline: none;
  opacity: 0.5;
  margin-right: 5px;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.s};
  transition: all 0.3s;

  &:hover {
    background: ${({ theme, remove }) =>
      remove ? theme.colors.mainGrey : theme.colors.primaryBlue};
    cursor: pointer;
    opacity: 0.8;
    color: white;
  }
`;

const PanelButton = ({ icon, remove, handleAction }) => {
  return (
    <StyledButton onClick={handleAction} remove={remove}>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  );
};

export default PanelButton;
