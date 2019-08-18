import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

const myDocuments = () => {
  return (
    <StyleWrapper>
      <h1>Documents component</h1>
    </StyleWrapper>
  );
};

export default myDocuments;
