/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import { connect } from 'react-redux';
import { Textarea } from 'components/atoms/Inputs';
import { newConfidentialText } from 'actions';
import { sidePanel } from 'functions';
import ButtonHolder from 'components/atoms/ButtonHolder';
import store from 'store';
import axios from 'axios';
import realPath from '../../../path';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 250px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  overflow: hidden;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.ms};
    font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  section {
    width: 100%;
    min-height: 200px;
    /* border: 1px solid black; */
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.ms};
    line-height: 25px;
    p {
      cursor: default;
      user-select: none;
      white-space: pre-line;
    }
  }
  @media ${({ theme }) => theme.media.small} {
    border-radius: 0;
    width: 100%;
  }
`;

class Panel extends Component {
  state = {
    editValue: false,
    localConf: '',
    disabled: false,
    token: sessionStorage.getItem('userID'),
  };

  handleEditMode = () => {
    this.setState(prevState => ({
      editValue: !prevState.editValue,
      localConf: this.props.confidential.trimEnd(),
    }));
  };

  saveButtonState = () => {
    this.setState(prevState => ({ disabled: !prevState.disabled }));
  };

  handleTextarea = e => {
    const { value } = e.target;
    this.setState({
      localConf: value,
    });
  };

  updateConfidential = e => {
    const { localConf, token } = this.state;
    const { id } = e.target;
    this.saveButtonState();
    axios
      .post(`${realPath.cors}data.php`, {
        type: id,
        data: id === 'save' ? localConf : '',
        token,
      })
      .then(({ data }) => {
        const { confidential } = data;
        if (confidential) {
          return (
            store.dispatch(newConfidentialText(confidential)),
            sidePanel({ content: 'Klauzula zapisana', error: false })
          );
        }
        return null;
      })
      .catch(error => {
        console.log('error :', error);
        sidePanel({ content: 'błąd serwera', error: true });
      })
      .finally(() => {
        if (id === 'save') {
          this.handleEditMode();
        }
        this.saveButtonState();
      });
  };

  render() {
    const { editValue, localConf, disabled } = this.state;
    const { confidential, language, path, pathL } = this.props;
    return (
      <>
        <StyledWrapper>
          <header>
            <p>{language === 'PL' ? path : pathL}</p>
          </header>
          <section>
            {editValue ? (
              <form>
                <Textarea value={localConf} onChange={this.handleTextarea} />
              </form>
            ) : (
              <p>{confidential}</p>
            )}
          </section>
        </StyledWrapper>
        <ButtonHolder>
          {editValue && (
            <PrimaryButton
              type="button"
              id="save"
              primary
              disabled={disabled}
              onClick={this.updateConfidential}
            >
              {language === 'PL' ? 'zapisz' : 'save'}
            </PrimaryButton>
          )}

          <PrimaryButton normal className="confButton" type="button" onClick={this.handleEditMode}>
            {language === 'PL' ? (editValue ? 'anuluj' : 'edytuj') : editValue ? 'cancel' : 'edit'}
          </PrimaryButton>

          {!editValue && (
            <PrimaryButton
              normal
              className="confButton"
              type="button"
              id="default"
              onClick={this.updateConfidential}
            >
              {language === 'PL' ? 'przywróć domyślne' : 'restore defaults'}
            </PrimaryButton>
          )}
        </ButtonHolder>
      </>
    );
  }
}
Panel.propTypes = {
  confidential: PropTypes.string,
};

Panel.defaultProps = {
  confidential: '',
};

const mapStateToProps = ({ confidential, path }) => ({
  confidential: confidential.confidential,
  path: path.name,
  pathL: path.nameL,
});

export default connect(mapStateToProps)(Panel);
