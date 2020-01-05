import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import Select from 'components/atoms/Inputs/Select';
import { Textarea } from 'components/atoms/Inputs';
import InputHeader from 'components/atoms/Inputs/InputHeader';
import { updatecurrentCVFromState, removeItemfromCurrentCv } from 'actions';
import store from 'store';
// import PropTypes from 'prop-types';

class EducationPanel extends Component {
  state = {
    id: '',
    name: '',
    technology: '',
    endYear: 0,
    description: '',
    statusActive: false,
  };

  componentDidMount() {
    this.mounted = true;
    const { id, name, technology, endYear, description } = this.props.item;

    this.setState({
      id,
      name,
      technology,
      endYear,
      description,
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
      statusActive: true,
    });
    if (!this.state.statusActive) {
      this.handleTimer();
    }
  };

  render() {
    const { id } = this.props.item;
    const { index, current, newItem, language } = this.props;
    const { name, technology, endYear, description } = this.state;
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
          language={language}
        />
        <div className="inputContainer">
          <Input
            placeholder={isPolish ? 'Nazwa aplikacji' : 'Aplications name'}
            id="name"
            value={name}
            onChange={this.handleForm}
          />
          <Input
            placeholder={isPolish ? 'Użyte technologie' : 'technologies used'}
            id="technology"
            value={technology}
            onChange={this.handleForm}
          />

          <Select
            title="data zakończenia"
            id="endYear"
            value={endYear}
            onChange={this.handleForm}
            start={startY}
            end={endY}
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
