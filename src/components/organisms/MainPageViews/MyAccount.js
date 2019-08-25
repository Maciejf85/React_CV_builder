import React from 'react';
import styled from 'styled-components';
import Section from 'components/molecules/Section/Section';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

const myAccount = () => {
  return (
    <StyleWrapper>
      <h3>myAccount component</h3>
      <Section />
    </StyleWrapper>
  );
};

export default myAccount;
