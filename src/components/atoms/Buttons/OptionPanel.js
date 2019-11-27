import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTimes, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { getCvData, updateCVList } from 'actions';
import ConfirmButton from 'components/atoms/Buttons/ConfirmButton';
import { withRouter } from 'react-router-dom';
import store from 'store';

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.buttonActive};

  li {
    align-self: center;
    font-size: 16px;
    padding: 0 10px;
  }
  .customeTheme {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.ms};
    padding: 10px 20px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 30px;
    height: 30px;
    font-size: 15px;
    background: transparent;
    color: ${({ theme }) => theme.colors.mainGrey};
    border: none;
    outline: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
    }
    p {
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.colors.buttonActive};
      cursor: default;
    }
  }
`;

class OptionPanel extends Component {
  state = {
    isAgree: false,
    isRemove: false,
  };

  handleClick = e => {
    const { id } = e.currentTarget;
    const { name } = e.currentTarget.dataset;
    const userId = sessionStorage.getItem('userID');
    if (name === 'edit') {
      const redir = this.props.history;
      store.dispatch(getCvData('get', id, userId, redir));
    } else if (name === 'delete') {
      this.setState(prevState => ({
        isAgree: !prevState.isAgree,
      }));
    } else if (name === 'remove') {
      this.setState({
        isRemove: true,
      });
      store.dispatch(updateCVList('remove', userId, id));
    }
  };

  handleButtons = () => {
    this.setState({
      isAgree: false,
    });
  };

  render() {
    const { id } = this.props;
    const { isAgree, isRemove } = this.state;

    return (
      <StyledWrapper>
        {!isAgree ? (
          <>
            <li data-tip="edytuj" data-for="edit">
              <button
                className="button"
                type="button"
                id={id}
                data-name="edit"
                onClick={this.handleClick}
              >
                <ReactTooltip id="edit" place="top" effect="solid" className="customeTheme" />
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </li>
            <li data-tip="pobierz PDF" data-for="download">
              <button
                className="button"
                type="button"
                id={id}
                data-name="download"
                onClick={this.handleClick}
              >
                <ReactTooltip id="download" effect="solid" className="customeTheme" />
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </li>
            <li data-tip="usuń CV" data-for="delete">
              <button
                className="button"
                type="button"
                data-name="delete"
                onClick={this.handleClick}
              >
                <FontAwesomeIcon icon={faTimes} data-name="delete" />
                <ReactTooltip id="delete" effect="solid" className="customeTheme" />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <p>Czy usunąć ?</p>
            </li>
            <li>
              <ConfirmButton data-name="remove" id={id} onClick={this.handleClick}>
                {isRemove && <FontAwesomeIcon icon={faSyncAlt} spin style={{ margin: '0 5px' }} />}
                usuń
              </ConfirmButton>
            </li>
            <li>
              <ConfirmButton cancel onClick={this.handleButtons} disabled={isRemove && true}>
                anuluj
              </ConfirmButton>
            </li>
          </>
        )}
      </StyledWrapper>
    );
  }
}

export default withRouter(OptionPanel);
