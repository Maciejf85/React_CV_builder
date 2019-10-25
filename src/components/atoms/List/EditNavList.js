import React, { Component } from 'react';
import styled from 'styled-components';
import { currentEditView } from 'actions';
import store from 'store';
import { connect } from 'react-redux';

const StyledWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  background: ${({ active, theme }) => (active ? theme.colors.primaryBlue : theme.colors.darkGrey)};
  display: grid;
  grid-template-columns: 6fr 1fr;
  justify-items: self-start;
  align-items: center;
  padding-left: 25px;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  transition: 0.3s;
  :hover {
    background: ${({ theme }) => theme.colors.secondaryBlue};
    cursor: pointer;
  }

  div {
    /* border: 1px dotted red; */
  }
`;

class EditNavList extends Component {
  handlePathChange = e => {
    const newPath = e.currentTarget.dataset.id;
    store.dispatch(currentEditView(newPath));
  };

  render() {
    const { name, link, currentView } = this.props;
    const isActive = link === currentView;
    return (
      <StyledWrapper active={isActive} data-id={link} onClick={this.handlePathChange}>
        <div>{name}</div>
        <div>opt</div>
      </StyledWrapper>
    );
  }
}
const mapStateToProps = state => state.editComponentView;
export default connect(mapStateToProps)(EditNavList);
