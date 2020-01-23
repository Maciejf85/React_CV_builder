import React, { Component } from 'react';
import styled from 'styled-components';
import { currentEditView } from 'actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    ${({ theme, content }) => (content ? theme.colors.lightBlue : theme.colors.darkGrey)};
  border-right-width: ${({ active }) => (active ? '0px' : '5px')};
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
    const { name, link, currentView, currentCv, icon } = this.props;
    const content = currentCv[link] !== undefined ? currentCv[link].length : null;
    const iconContent = icon[0];
    const isActive = link === currentView;
    return (
      <StyledWrapper
        active={isActive}
        data-id={link}
        onClick={this.handlePathChange}
        content={content}
      >
        <div>{name}</div>
        <FontAwesomeIcon icon={iconContent} />
      </StyledWrapper>
    );
  }
}
const mapStateToProps = ({ editComponentView, currentCv }) => ({
  currentView: editComponentView.currentView,
  currentCv,
});
export default connect(mapStateToProps)(EditNavList);
