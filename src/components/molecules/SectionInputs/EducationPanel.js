import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import Select from 'components/atoms/Inputs/Select';
import { Textarea } from 'components/atoms/Inputs';
import InputHeader from 'components/atoms/Inputs/InputHeader';
import SlideCheckox from 'components/atoms/Inputs/slideCheckbox';
import { updatecurrentCVFromState, removeItemfromCurrentCv } from 'actions';
import store from 'store';
// import PropTypes from 'prop-types';

class EducationPanel extends Component {
  state = {
    id: '',
    name: '',
    department: '',
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
      department,
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
      department,
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
      [e.target.dataset.id]: value,
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
      department,
      startYear,
      startMonth,
      endYear,
      endMonth,
      description,
      inProgress,
    } = this.state;
    const startY = new Date().getFullYear() - 65;
    const endY = new Date().getFullYear();
    const isPolish = language === 'PL';
    return (
      <StyledInputSection id={id}>
        <InputHeader
          index={`${index + 1}`}
          current={current}
          newItem={newItem}
          removeItem={this.handleRemoveItem}
        />
        <div className="inputContainer">
          <Input
            placeholder={isPolish ? 'Nazwa szkoły' : 'School'}
            id="name"
            value={name}
            onChange={this.handleForm}
          />
          <Input
            placeholder={isPolish ? 'Kierunek' : 'Department'}
            id="department"
            value={department}
            onChange={this.handleForm}
          />

          <Select
            title={isPolish ? 'Data rozpoczęcia' : 'Started at'}
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
        </div>
        <div className="checkboxContainer">
          <SlideCheckox
            handleCheckbox={this.handleCheckbox}
            checkboxState={inProgress}
            language={language}
          />
        </div>

        <Textarea
          edit
          placeholder="opis"
          data-id="description"
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

export default EducationPanel;

// @TODO: wyniesienie update store i update pliku do wyższych komponentów
// data-actionType
// const { actiontype } = e.target.dataset;
