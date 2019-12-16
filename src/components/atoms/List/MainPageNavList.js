import React, { Component } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';
import { currentView } from 'actions';
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PosedLi = posed.li({
  active: {
    x: '5px',
  },
  noActive: {
    x: 0,
  },
});

const StyledWrapper = styled(PosedLi)`
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme, active }) =>
    active ? theme.colors.primaryBlue : theme.colors.secondaryGrey};
  border-left: 4px solid ${({ theme }) => theme.colors.primaryGrey};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
  span {
    display: inline;
    @media ${({ theme }) => theme.media.small} {
      display: none;
    }
  }
  .icon {
    display: none;

    @media ${({ theme }) => theme.media.small} {
      font-size: 2rem;
      display: block;
    }
  }
  @media ${({ theme }) => theme.media.small} {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    height: 50px;
    flex: 1 1 50px;
    border: none;
  }
`;
class MainPageListItem extends Component {
  handlePathChange = e => {
    const newPath = e.currentTarget.dataset.id;
    store.dispatch(currentView(newPath));
  };

  render() {
    const { name, link, path, icon } = this.props;
    const isActive = link === path.currentView;
    const iconContent = icon[0];
    return (
      <StyledWrapper
        active={isActive}
        pose={isActive ? 'active' : 'noActive'}
        name={name}
        data-id={link}
        onClick={this.handlePathChange}
      >
        <span>{name}</span>
        <div className="icon">
          <FontAwesomeIcon icon={iconContent} />
        </div>
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
