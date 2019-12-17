import React from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/MainPagePanel/Panel';

const StyleWrapper = styled.div`
  width: 100%;
  margin: 15px;
  @media ${({ theme }) => theme.media.small} {
    margin: 15px 0;
  }
`;

const Confidential = ({ language }) => {
  return (
    <StyleWrapper>
      <Panel language={language} />
    </StyleWrapper>
  );
};

export default Confidential;
