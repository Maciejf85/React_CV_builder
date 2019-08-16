import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const StyledWrapper = styled.li`
  border: 1px solid red;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: ${({ theme, active }) =>
    active ? theme.colors.primaryBlue : theme.colors.secondaryGrey};
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const MainPageListItem = props => {
  return <StyledWrapper active={props.active}>{props.name}</StyledWrapper>;
};

MainPageListItem.propTypes = {
  name: Proptypes.string.isRequired,
  active: Proptypes.bool,
};

MainPageListItem.defaultProps = {
  active: false,
};

export default MainPageListItem;
