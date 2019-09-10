import React from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

const myDocuments = () => {
  return (
    <StyleWrapper>
      <Panel />
    </StyleWrapper>
  );
};

export default myDocuments;
