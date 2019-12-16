import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import posed from 'react-pose';
import { logOut } from 'actions';
import store from 'store';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 7fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.mainGrey};
  padding: 10px;
  min-width: 50px;
  color: white;
  z-index: 1;
  .iconStyle {
    color: ${({ theme }) => theme.colors.lightBlue};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondaryBlue};
    }
  }

  p {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSize.ms};
    margin: 0;
    padding: 0 5px;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.font.thin};
    @media ${({ theme }) => theme.media.small} {
      font-size: 1.15rem;
      letter-spacing: 0;
    }
  }
  @media ${({ theme }) => theme.media.small} {
    width: 160px;
    grid-gap: 3px;
  }
`;
const PosedMenu = posed.div({
  hidden: {
    opacity: 0,
    zIndex: -2,
    y: 0,
    height: 0,
    transition: {
      opacity: { ease: 'easeIn', duration: 200 },
      default: { ease: 'easeIn', duration: 700 },
    },
  },

  visible: { opacity: 1, y: '100%', zIndex: 2, height: '100%' },
});

const DropBox = styled(PosedMenu)`
  position: absolute;
  top: 0;
  left: -1px;
  width: calc(100% + 2px);
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.mainGrey};
  font-size: ${({ theme }) => theme.fontSize.ms};
  border-top: none;
  pointer-events: none;
  padding: 10px;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryBlue};
    background: ${({ theme }) => theme.colors.mediumGrey};
    font-weight: ${({ theme }) => theme.font.bold};
  }

  &.active {
    pointer-events: auto;
    &:hover {
      cursor: pointer;
    }
  }
`;

class LoggedIn extends Component {
  // const email = useSelector(state => state.personalData.email);
  state = {
    isVisible: false,
  };

  handleDropdown = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };

  handleLogout = () => {
    localStorage.removeItem('userID');
    sessionStorage.removeItem('userID');
    store.dispatch(logOut());
  };

  render() {
    const { isVisible } = this.state;
    const { email, name, surname, language } = this.props;
    return (
      <StyledWrapper>
        {email ? <p>{email}</p> : <p>{`${name} ${surname}`}</p>}
        <div>
          <FontAwesomeIcon icon={faAngleDown} className="iconStyle" onClick={this.handleDropdown} />
          {/* {isVisible && <DropBox pose={isVisible ? 'visible' : 'hidden'}>wyloguj</DropBox>} */}
          <DropBox
            className={isVisible ? 'active' : ''}
            pose={isVisible ? 'visible' : 'hidden'}
            onClick={this.handleLogout}
          >
            Wyloguj
          </DropBox>
          <DropBox
            className={isVisible ? 'active' : ''}
            pose={isVisible ? 'visible' : 'hidden'}
            onClick={this.handleLogout}
          >
            {language === 'PL' ? 'Wyloguj' : 'Logout'}
          </DropBox>
        </div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ personalData }) => personalData;
export default connect(mapStateToProps)(LoggedIn);
