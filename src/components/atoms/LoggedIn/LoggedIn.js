import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0 30px;
  color: white;

  p {
    font-size: ${({ theme }) => theme.fontSize.ms};
  }
`;

const LoggedIn = () => {
  const email = useSelector(state => state.userData.email);
  return (
    <StyledWrapper>
      <p>{email}</p>
    </StyledWrapper>
  );
};

export default LoggedIn;
