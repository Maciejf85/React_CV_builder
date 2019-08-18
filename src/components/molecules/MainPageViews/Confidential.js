import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

const condidential = () => {
  return (
    <StyleWrapper>
      <h1>Confidential component</h1>
    </StyleWrapper>
  );
};

export default condidential;
