import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import InputHeader from 'components/atoms/Inputs/InputHeader';
import { updatecurrentCVFromState, removeItemfromCurrentCv } from 'actions';
import store from 'store';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default class LanguagePanel extends Component {
  state = {
    id: '',
    name: '',
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
    const { value } = e.target;
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
      }, 3000);
    }
  };

  handleRemoveItem = () => {
    const { id } = this.props.item;
    const { current } = this.props;
    store.dispatch(removeItemfromCurrentCv(current, id));
  };

  render() {
    const { id } = this.props.item;
    const { index, current, newItem } = this.props;
    const { name, description } = this.state;

    return (
      <StyledInputSection id={id}>
        <InputHeader
          index={`${index + 1}`}
          current={current}
          newItem={newItem}
          removeItem={this.handleRemoveItem}
        />
        <StyledWrapper>
          <Input placeholder="język" id="name" value={name} onChange={this.handleForm} />
          <Input
            isSmall
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

// @TODO: wyniesienie update store i update pliku do wyższych komponentów
