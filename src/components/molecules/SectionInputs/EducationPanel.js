import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import Select from 'components/atoms/Inputs/Select';
import { Textarea } from 'components/atoms/Inputs';
import { updatecurrentCVFromState } from 'actions';
import store from 'store';
import PropTypes from 'prop-types';

class EducationPanel extends Component {
  state = {
    id: '',
    name: '',
    startYear: 0,
    startMonth: 0,
    endYear: 0,
    endMonth: 0,
    description: '',
  };

  componentDidMount() {
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

  handleForm = e => {
    const value = parseInt(e.target.value, 10) || e.target.value;
    this.setState({
      [e.target.id]: value,
    });
  };

  updateStore = () => {
    const { id } = this.props.item;
    store.dispatch(updatecurrentCVFromState('education', id, this.state));
  };

  render() {
    const { id } = this.props.item;
    const { index } = this.props;
    const { name, startYear, startMonth, endYear, endMonth, description } = this.state;
    const startY = new Date().getFullYear() - 65;
    const endY = new Date().getFullYear();
    return (
      <StyledInputSection id={id}>
        <button onClick={this.updateStore} type="button">
          Update Store
        </button>
        <p>{`Szkoła #${index + 1}`}</p>
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
