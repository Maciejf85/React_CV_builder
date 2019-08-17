import React, { Component } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';
import changePath from 'actions/path';

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
    store.dispatch(changePath(newPath));
  };

  render() {
    const { name, active, link } = this.props;
    return (
      <StyledWrapper active={active} name={name} data-id={link} onClick={this.handlePathChange}>
        {name}
      </StyledWrapper>
    );
  }
}

MainPageListItem.propTypes = {
  name: Proptypes.string.isRequired,
  active: Proptypes.bool,
  link: Proptypes.string.isRequired,
};

MainPageListItem.defaultProps = {
  active: false,
};

const mapStateToProps = ({ path }) => ({ path });

export default connect(mapStateToProps)(MainPageListItem);
