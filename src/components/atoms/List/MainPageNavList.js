import React, { Component } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';
import { currentView } from 'actions';

const StyledWrapper = styled.li`
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme, active }) =>
    active ? theme.colors.primaryBlue : theme.colors.secondaryGrey};
  border-left: 2px solid ${({ theme }) => theme.colors.primaryGrey};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

class MainPageListItem extends Component {
  handlePathChange = e => {
    const newPath = e.currentTarget.dataset.id;
    store.dispatch(currentView(newPath));
  };

  render() {
    const { name, link, path } = this.props;
    const isActive = link === path.currentView;
    return (
      <StyledWrapper active={isActive} name={name} data-id={link} onClick={this.handlePathChange}>
        {name}
      </StyledWrapper>
    );
  }
}

MainPageListItem.propTypes = {
  name: Proptypes.string.isRequired,
  path: Proptypes.object.isRequired,
  link: Proptypes.string.isRequired,
};

const mapStateToProps = ({ path }) => ({ path });
export default connect(mapStateToProps)(MainPageListItem);
