import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.buttonActive};

  li {
    font-size: 15px;
    padding: 0 5px;
    margin: 0 7px;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
    }
    .customeTheme {
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
      padding: 3px 20px;
    }
  }
`;

const OptionPanel = () => {
  return (
    <StyledWrapper>
      <li>
        <span data-tip="edytuj" data-for="edit">
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <ReactTooltip id="edit" place="top" effect="solid" className="customeTheme" />
      </li>
      <li>
        <span data-tip="pobierz PDF" data-for="download">
          <FontAwesomeIcon icon={faDownload} />
        </span>
        <ReactTooltip id="download" effect="solid" className="customeTheme" />
      </li>
      <li>
        <span data-tip="usuń CV" data-for="delete">
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <ReactTooltip id="delete" effect="solid" className="customeTheme" />
      </li>
    </StyledWrapper>
  );
};

export default OptionPanel;
