import React from 'react';
import styled from 'styled-components';
import Section from 'components/molecules/Section/Section';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  margin: 15px;
  @media ${({ theme }) => theme.media.small} {
    margin: 15px 0;
  }
`;

const myAccount = () => {
  return (
    <StyleWrapper>
      <Section />
    </StyleWrapper>
  );
};

export default myAccount;
