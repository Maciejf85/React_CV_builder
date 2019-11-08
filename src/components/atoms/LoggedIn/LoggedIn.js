import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed from 'react-pose';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 7fr 3fr;
  justify-items: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.mainGrey};
  padding: 10px;
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
    font-size: ${({ theme }) => theme.fontSize.ms};
    margin: 0;
  }
`;
const PosedMenu = posed.div({
  hidden: {
    opacity: 0,
    y: '0',
    zIndex: -2,
    transition: {
      opacity: { ease: 'easeIn', duration: 300 },
      default: { ease: 'linear', duration: 700 },
    },
  },
  visible: { opacity: 1, y: '100%', zIndex: 2 },
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
  padding: 10px;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryBlue};
    background: ${({ theme }) => theme.colors.mediumGrey};
    cursor: pointer;
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

  render() {
    const { isVisible } = this.state;
    const { email } = this.props;
    return (
      <StyledWrapper>
        <p>{email}</p>
        <FontAwesomeIcon icon={faAngleDown} className="iconStyle" onClick={this.handleDropdown} />
        {/* {isVisible && <DropBox pose={isVisible ? 'visible' : 'hidden'}>wyloguj</DropBox>} */}
        <DropBox pose={isVisible ? 'visible' : 'hidden'}>wyloguj</DropBox>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ personalData }) => personalData;
export default connect(mapStateToProps)(LoggedIn);
