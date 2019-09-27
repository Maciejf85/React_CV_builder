import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { getCvData } from 'actions';
import store from 'store';

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.buttonActive};

  li {
    font-size: 15px;
    padding: 0 5px;
    margin: 0 5px;

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

class OptionPanel extends Component {
  handleClick = e => {
    const { id } = e.currentTarget;
    const { name } = e.currentTarget.dataset;
    if (name === 'edit') {
      const userId = sessionStorage.getItem('userID');
      store.dispatch(getCvData('get', id, userId));
    }
  };

  render() {
    const { id } = this.props;

    return (
      <StyledWrapper>
        <li>
          <span data-tip="edytuj" data-for="edit">
            <FontAwesomeIcon icon={faEdit} id={id} data-name="edit" onClick={this.handleClick} />
          </span>
          <ReactTooltip id="edit" place="top" effect="solid" className="customeTheme" />
        </li>
        <li>
          <span data-tip="pobierz PDF" data-for="download">
            <FontAwesomeIcon
              icon={faDownload}
              id={id}
              data-name="download"
              onClick={this.handleClick}
            />
          </span>
          <ReactTooltip id="download" effect="solid" className="customeTheme" />
        </li>
        <li>
          <span data-tip="usuń CV" data-for="delete">
            <FontAwesomeIcon icon={faTimes} id={id} data-name="delete" onClick={this.handleClick} />
          </span>
          <ReactTooltip id="delete" effect="solid" className="customeTheme" />
        </li>
      </StyledWrapper>
    );
  }
}

export default OptionPanel;
