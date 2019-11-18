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
  border-right: 5px solid
    ${({ theme, content }) => (content ? theme.colors.lightBlue : theme.colors.mediumGrey)};
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
    const { currentView } = this.props;
    const newPath = e.currentTarget.dataset.id;
    if (currentView !== newPath) store.dispatch(currentEditView(newPath));
  };

  render() {
    const { name, link, currentView, currentCv } = this.props;
    const content = currentCv[currentView];
    console.log('content', content);

    const isActive = link === currentView;
    return (
      <StyledWrapper active={isActive} data-id={link} onClick={this.handlePathChange}>
        <div>{name}</div>
        <div>opt</div>
      </StyledWrapper>
    );
  }
}
const mapStateToProps = ({ editComponentView, currentCv }) => ({
  currentView: editComponentView.currentView,
  currentCv,
});
export default connect(mapStateToProps)(EditNavList);
