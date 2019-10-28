import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import { Textarea } from 'components/atoms/Inputs';
import { updatecurrentCVFromState, removeItemfromCurrentCv } from 'actions';
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
    store.dispatch(updatecurrentCVFromState('education', id, this.state));
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

  render() {
    const { id } = this.props.item;
    const { index } = this.props;
    const { name, description } = this.state;
    return (
      <StyledInputSection id={id}>
        <p>
          {`Szkoła #${index + 1}`}
          <button
            type="button"
            onClick={() => store.dispatch(removeItemfromCurrentCv('education', id))}
          >
            usuń
          </button>
        </p>
        <Input
          isSmall
          placeholder="język"
          id="name"
          value={name}
          onChange={this.handleForm}
        />


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
