import React from 'react';
import { useSelector } from 'react-redux';
import { Textarea } from 'components/atoms/Inputs';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  /* border: 1px solid black; */
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  line-height: 25px;
  p {
    cursor: default;
    user-select: none;
  }
`;

const Body = props => {
  const text = useSelector(state => state.confidential);
  return (
    <StyledWrapper>
      <p>{text.confidential}</p>
      {props.active && (
        <form>
          <Textarea value={text.confidential} />
        </form>
      )}
    </StyledWrapper>
  );
};

export default Body;
