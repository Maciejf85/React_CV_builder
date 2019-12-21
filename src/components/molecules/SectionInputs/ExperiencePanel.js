import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import Select from 'components/atoms/Inputs/Select';
import { Textarea } from 'components/atoms/Inputs';
import InputHeader from 'components/atoms/Inputs/InputHeader';
import { updatecurrentCVFromState, removeItemfromCurrentCv } from 'actions';
import SlideCheckox from 'components/atoms/Inputs/slideCheckbox';
import styled from 'styled-components';

import store from 'store';
// import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

class ExperiencePanel extends Component {
  state = {
    id: '',
    name: '',
    employer: '',
    startYear: 0,
    startMonth: 0,
    endYear: 0,
    endMonth: 0,
    description: '',
    inProgress: false,
    statusActive: false,
  };

  componentDidMount() {
    this.mounted = true;
    const {
      id,
      name,
      employer,
      startYear,
      startMonth,
      endYear,
      endMonth,
      description,
      inProgress,
    } = this.props.item;

    this.setState({
      id,
      name,
      employer,
      startMonth,
      startYear,
      endYear,
      endMonth,
      description,
      inProgress,
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleForm = e => {
    const value = parseInt(e.target.value, 10) || e.target.value;
    this.setState({
      [e.target.id]: value,
      statusActive: true,
    });
    if (!this.state.statusActive) {
      this.handleTimer();
    }
  };

  updateStore = () => {
    const { id } = this.props.item;
    const { current } = this.props;
    const newState = Object.assign({}, this.state);
    delete newState.statusActive;
    store.dispatch(updatecurrentCVFromState(current, id, newState));
  };

  handleTimer = () => {
    if (this.mounted) {
      setTimeout(() => {
        this.updateStore();

        if (this.mounted) {
          this.setState({
            statusActive: false,
          });
        }
      }, 1500);
    }
  };

  handleRemoveItem = () => {
    const { id } = this.props.item;
    const { current } = this.props;
    store.dispatch(removeItemfromCurrentCv(current, id));
  };

  handleCheckbox = () => {
    this.setState({
      inProgress: !this.state.inProgress,
      statusActive: true,
    });
    if (!this.state.statusActive) {
      this.handleTimer();
    }
  };

  render() {
    const { id } = this.props.item;
    const { index, current, newItem, language } = this.props;
    const {
      name,
      employer,
      startYear,
      startMonth,
      endYear,
      endMonth,
      description,
      inProgress,
    } = this.state;
    const startY = new Date().getFullYear() - 65;
    const endY = new Date().getFullYear();
    return (
      <StyledInputSection id={id}>
        <InputHeader
          index={`${index + 1}`}
          current={current}
          newItem={newItem}
          removeItem={this.handleRemoveItem}
        />
        <InputWrapper>
          <Input
            isSmall
            placeholder="nazwa pracodawcy"
            id="name"
            value={name}
            onChange={this.handleForm}
          />
          <Input
            isSmall
            placeholder="nazwa stanowiska"
            id="employer"
            value={employer}
            onChange={this.handleForm}
          />

          <Select
            title="data rozpoczęcia"
            id="startYear"
            value={startYear}
            onChange={this.handleForm}
            start={startY}
            end={endY}
          />
          <Select
            id="startMonth"
            value={startMonth}
            onChange={this.handleForm}
            start={0}
            end={12}
          />
          <Select
            title="data zakończenia"
            id="endYear"
            value={endYear}
            onChange={this.handleForm}
            start={startY}
            end={endY}
            disabled={inProgress}
          />
          <Select
            id="endMonth"
            value={endMonth}
            onChange={this.handleForm}
            start={0}
            end={12}
            disabled={inProgress}
          />
        </InputWrapper>
        <div className="checkboxContainer">
          <SlideCheckox
            handleCheckbox={this.handleCheckbox}
            checkboxState={inProgress}
            language={language}
          />
        </div>
        <Textarea
          edit
          placeholder="opis stanowiska"
          id="description"
          value={description}
          onChange={this.handleForm}
        />
      </StyledInputSection>
    );
  }
}

// DefaultInputSection.propTypes = {
//  item: propTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     startYear: PropTypes.string,
//     startMonth: PropTypes.string,
//     endYear: PropTypes.string,
//     endMonth: PropTypes.string,
//     description: PropTypes.string,
//   }),
// };

// DefaultInputSection.defaultProps = {
//   id: '1',
//   name: 'Stranger',
//   startYear: 'Stranger',
//   startMonth: 'Stranger',
//   endYear: 'Stranger',
//   endMonth: 'Stranger',
//   description: 'Stranger',
// };

export default ExperiencePanel;

// @TODO: wyniesienie update store i update pliku do wyższych komponentów
