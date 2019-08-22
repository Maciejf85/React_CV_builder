import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import { connect } from 'react-redux';
import { Textarea } from 'components/atoms/Inputs';
import { newConfidentialText } from 'actions';
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
    }
  }
`;

class Panel extends Component {
  state = {
    editValue: false,
    localConf: '',
  };

  handleEditMode = () => {
    this.setState(prevState => ({
      editValue: !prevState.editValue,
      localConf: this.props.confidential,
    }));
  };

  updateConfidential = () => {
    const { localConf } = this.state;

    axios
      .post(`${path.cors}data.php`, {
        type: 'save',
        data: localConf,
      })
      .then(response => {
        const confidential = response.data;
        return store.dispatch(newConfidentialText(confidential.confidential));
      })
      .catch(error => console.log('error :', error))
      .finally(this.handleEditMode());
  };

  handleTextarea = e => {
    const { value } = e.target;
    this.setState({
      localConf: value,
    });
  };

  render() {
    const { editValue, localConf } = this.state;
    const { confidential } = this.props;

    return (
      <StyledWrapper>
        <header>
          <p>Klauza poufności</p>
          <div>
            {editValue && (
              <PrimaryButton type="button" onClick={this.updateConfidential}>
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
    );
  }
}
Panel.propTypes = {
  confidential: PropTypes.string.isRequired,
};

const mapStateToProps = state => state.confidential;
export default connect(mapStateToProps)(Panel);
