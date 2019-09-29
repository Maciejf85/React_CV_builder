import React from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/MainPagePanel/Panel';

const StyleWrapper = styled.div`
  width: 100%;
  margin: 15px;
`;

const Confidential = () => {
  return (
    <StyleWrapper>
      <Panel />
    </StyleWrapper>
  );
};

export default Confidential;
