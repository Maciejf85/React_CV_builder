import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

const myAccount = () => {
  return (
    <StyleWrapper>
      <h1>myAccount component</h1>
    </StyleWrapper>
  );
};

export default myAccount;
