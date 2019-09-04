import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import { connect } from 'react-redux';
import { Textarea } from 'components/atoms/Inputs';
import { newConfidentialText, changeSidePanelState, getData as getDataConf } from 'actions';
import store from 'store';
import axios from 'axios';
import path from '../../../path';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 250px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  border-bottom-color: hsl(210, 3%, 85%);
  overflow: hidden;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 10px;
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
`;

class Panel extends Component {
  state = {
    editValue: false,
    localConf: '',
    disabled: false,
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

  // handleGetSelection = () => {
  //   const selection = window.getSelection();
  //   console.log(selection.toString());
  // };

  updateConfidential = () => {
    const { localConf } = this.state;
    this.saveButtonState();
    axios
      .post(`${path.cors}data.php`, {
        type: 'save',
        data: localConf,
      })
      .then(({ data }) => {
        const confidential = data;
        return (
          store.dispatch(newConfidentialText(confidential.confidential)),
          store.dispatch(changeSidePanelState(false))
        );
      })
      .catch(error => {
        console.log('error :', error);
        store.dispatch(changeSidePanelState(true));
      })
      .finally(() => {
        this.handleEditMode();
        this.saveButtonState();
        setTimeout(() => store.dispatch(changeSidePanelState(false)), 2000);
      });
  };

  render() {
    const { editValue, localConf, disabled } = this.state;
    const { confidential, getData } = this.props;

    return (
      <>
        <StyledWrapper>
          <header>
            <p>Klauza poufności</p>
            <div>
              {editValue && (
                <PrimaryButton
                  type="button"
                  primary
                  disabled={disabled}
                  onClick={this.updateConfidential}
                >
                  zapisz
                </PrimaryButton>
              )}
              <PrimaryButton type="button" onClick={this.handleEditMode}>
                {editValue ? 'anuluj' : 'edytuj'}
              </PrimaryButton>
            </div>
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

        <PrimaryButton type="button" dafault onClick={() => getData('default')}>
          przywróć domyślne
        </PrimaryButton>
      </>
    );
  }
}
Panel.propTypes = {
  confidential: PropTypes.string,
  getData: PropTypes.func.isRequired,
};

Panel.defaultProps = {
  confidential: '',
};

const mapStateToProps = state => state.confidential;
const mapDispatchToProps = dispatch => ({
  getData: info => dispatch(getDataConf(info)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panel);
