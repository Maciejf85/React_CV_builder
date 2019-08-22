import React, { Component } from 'react';
import styled from 'styled-components';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import { connect } from 'react-redux';
import { Textarea } from 'components/atoms/Inputs';

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
    this.setState(prevState => ({ editValue: !prevState.editValue }));
  };

  render() {
    const { editValue } = this.state;
    const { confidential } = this.props;

    console.log('this.props :', this.props);
    return (
      <StyledWrapper>
        <header>
          <p>Klauza poufności</p>
          <h5>{editValue.toString()}</h5>
          <PrimaryButton type="button" onClick={this.handleEditMode}>
            {editValue ? 'Zapisz' : 'Edytuj'}
          </PrimaryButton>
        </header>
        <section>
          {editValue ? (
            <form>
              <Textarea value={confidential} />
            </form>
          ) : (
            <p>{confidential}</p>
          )}
        </section>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.confidential;
export default connect(mapStateToProps)(Panel);
