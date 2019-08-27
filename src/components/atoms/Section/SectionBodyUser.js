import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  /* border: 1px solid black; */
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  line-height: 25px;
  p {
    cursor: default;
    user-select: none;
  }
  span {
    display: inline-block;
    min-width: 100px;
    font-weight: ${({ theme }) => theme.font.bold};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: black;
  }
  li {
    font-size: ${({ theme }) => theme.fontSize.ms};
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.secondaryGrey};
  }
`;

const SectionBody = () => {
  const userData = useSelector(state => state.userName);
  return (
    <StyledWrapper>
      <h1>Twoje konto</h1>
      <ul>
        <li>
          <span>imię </span> {userData.name}
        </li>
        <li>
          <span>nazwisko </span> {userData.surname}
        </li>
        <li>
          <span>email:</span> {userData.email}
        </li>
      </ul>
    </StyledWrapper>
  );
};

export default SectionBody;
