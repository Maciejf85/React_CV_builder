import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { getCvData, updateCVList } from 'actions';
import ConfirmButton from 'components/atoms/Buttons/ConfirmButton'
import { withRouter } from 'react-router-dom';
import store from 'store';

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.buttonActive};



  li {
    font-size: 16px;
    padding: 0 10px;


    }
    .customeTheme {
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
      padding: 3px 20px;
    }
    button{
      display:flex;
      justify-content:center;
      align-items:center;
      padding:5px;
      width:25px;
      height:25px;
      background:transparent;
      border:none;
      border:1px solid black;
      outline:none;
      &:hover {
      color: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
    }
     p{
       margin:0;
       padding:0;
      color: ${({ theme }) => theme.colors.buttonActive};
      cursor:default;
    } 
  }
`;

class OptionPanel extends Component {
  state = {
    isAgree: false
  }

  handleClick = e => {
    const { id } = e.currentTarget;
    const { name } = e.currentTarget.dataset;
    const userId = sessionStorage.getItem('userID');
    if (name === 'edit') {
      const redir = this.props.history;
      store.dispatch(getCvData('get', id, userId, redir));
    } else if (name === 'delete') {
      this.setState(prevState => ({
        isAgree: !prevState.isAgree
      }))
    } else if (name === 'remove') {
      store.dispatch(updateCVList('remove', userId, id));

    }

  };

  handleButtons = () => {
    this.setState({
      isAgree: false
    })
  }

  render() {
    const { id } = this.props;
    const { isAgree } = this.state

    return (
      <StyledWrapper>
        {!isAgree
          ? (
            <>

              <li data-tip="edytuj" data-for="edit">
                <button type='button' id={id} data-name="edit" onClick={this.handleClick}>
                  <FontAwesomeIcon icon={faEdit}  >
                    <ReactTooltip id="edit" place="top" effect="solid" className="customeTheme" />
                  </FontAwesomeIcon>
                </button>
              </li>
              <li data-tip="pobierz PDF" data-for="download">
                <button type='button' id={id}
                  data-name="download"
                  onClick={this.handleClick} >
                  <FontAwesomeIcon
                    icon={faDownload}
                  >
                    <ReactTooltip id="download" effect="solid" className="customeTheme" />
                  </FontAwesomeIcon>
                </button>
              </li>
              <li data-tip="usuń CV" data-for="delete">
                <button type='button' data-name="delete" onClick={this.handleClick}>
                  <FontAwesomeIcon icon={faTimes} data-name="delete" >
                    <ReactTooltip id="delete" effect="solid" className="customeTheme" />
                  </FontAwesomeIcon>
                </button>
              </li>
            </>
          )
          :
          <>
            <li>
              <p>Czy usunąć ?</p>
            </li>
            <li>
              <ConfirmButton data-name='remove' id={id} onClick={this.handleClick}>usuń</ConfirmButton>
            </li>
            <li>
              <ConfirmButton cancel onClick={this.handleButtons} >anuluj</ConfirmButton>
            </li>
          </>
        }
      </StyledWrapper>
    );
  }
}

export default withRouter(OptionPanel);
