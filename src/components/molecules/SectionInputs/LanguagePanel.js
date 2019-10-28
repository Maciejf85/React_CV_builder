import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import DescriptionInput from 'components/atoms/Inputs/descriptionInput';
import { updatecurrentCVFromState, removeItemfromCurrentCv } from 'actions';
import store from 'store';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
`;

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
    const { id, name, description } = this.props.item;

    this.setState({
      id,
      name,
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

  render() {
    const { id } = this.props.item;
    const { index, current } = this.props;
    const { name, description } = this.state;

    return (
      <StyledInputSection id={id}>
        <p>
          {`Język #${index + 1}`}
          <button
            type="button"
            onClick={() => store.dispatch(removeItemfromCurrentCv(current, id))}
          >
            usuń
          </button>
        </p>
        <StyledWrapper>
          <Input isSmall placeholder="język" id="name" value={name} onChange={this.handleForm} />

          <DescriptionInput
            placeholder="opis"
            id="description"
            value={description}
            onChange={this.handleForm}
          />
        </StyledWrapper>
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
