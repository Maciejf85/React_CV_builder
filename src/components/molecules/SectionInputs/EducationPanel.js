import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import Select from 'components/atoms/Inputs/Select';
import { Textarea } from 'components/atoms/Inputs';
import InputHeader from 'components/atoms/Inputs/InputHeader';
import { updatecurrentCVFromState, addNewItemToCurrentCv, removeItemfromCurrentCv } from 'actions';

import store from 'store';
// import PropTypes from 'prop-types';

class EducationPanel extends Component {
  state = {
    id: '',
    name: '',
    startYear: 0,
    startMonth: 0,
    endYear: 0,
    endMonth: 0,
    description: '',
    statusActive: false,
  };

  componentDidMount() {
    this.mounted = true;
    const { id, name, startYear, startMonth, endYear, endMonth, description } = this.props.item;

    this.setState({
      id,
      name,
      startMonth,
      startYear,
      endYear,
      endMonth,
      description,
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
    store.dispatch(updatecurrentCVFromState(current, id, this.state));
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
      }, 3000);
    }
  };

  handleNewItem = () => {
    const { current } = this.props;

    store.dispatch(
      addNewItemToCurrentCv(current, {
        name: '',
        startYear: 2000,
        startMonth: 1,
        endYear: 2000,
        endMonth: 1,
        description: '',
      }),
    );
  };

  handleRemoveItem = () => {
    const { id } = this.props.item;
    const { current } = this.props;
    store.dispatch(removeItemfromCurrentCv(current, id));
  };

  render() {
    const { id } = this.props.item;
    const { index, current } = this.props;
    const { name, startYear, startMonth, endYear, endMonth, description } = this.state;
    const startY = new Date().getFullYear() - 65;
    const endY = new Date().getFullYear();
    return (
      <StyledInputSection id={id}>
        <InputHeader
          index={`${index + 1}`}
          current={current}
          newItem={this.handleNewItem}
          removeItem={this.handleRemoveItem}
        />
        <Input
          isSmall
          placeholder="nazwa szkoły"
          id="name"
          value={name}
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
        <Select id="startMonth" value={startMonth} onChange={this.handleForm} start={0} end={12} />
        <Select
          title="data zakończenia"
          id="endYear"
          value={endYear}
          onChange={this.handleForm}
          start={startY}
          end={endY}
        />
        <Select id="endMonth" value={endMonth} onChange={this.handleForm} start={0} end={12} />

        <Textarea
          edit
          placeholder="opis"
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

export default EducationPanel;

// @TODO: wyniesienie update store i update pliku do wyższych komponentów
