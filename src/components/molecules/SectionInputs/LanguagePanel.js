import React, { Component } from 'react';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';
import Input from 'components/atoms/Inputs/Input';
import InputHeader from 'components/atoms/Inputs/InputHeader';
import { updatecurrentCVFromState, addNewItemToCurrentCv, removeItemfromCurrentCv } from 'actions';
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
    const { name, description } = this.state;

    return (
      <StyledInputSection id={id}>
        <InputHeader
          index={`${index + 1}`}
          current={current}
          newItem={this.handleNewItem}
          removeItem={this.handleRemoveItem}
        />
        <StyledWrapper>
          <Input isSmall placeholder="język" id="name" value={name} onChange={this.handleForm} />
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
