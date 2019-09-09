import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  justify-items: center;
  align-items: center;
  min-width: 100px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 10px;
  color: white;
  .iconStyle {
    color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      cursor: pointer;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.ms};
    margin: 0;
  }
`;

const LoggedIn = () => {
  const email = useSelector(state => state.userData.email);
  return (
    <StyledWrapper>
      {/* <FontAwesomeIcon icon={faUser} /> */}
      <p>{email}</p>
      <FontAwesomeIcon icon={faAngleDown} className="iconStyle" />
    </StyledWrapper>
  );
};

export default LoggedIn;
