import React from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import { useSelector } from 'react-redux';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

const MyDocuments = () => {
  const name = useSelector(state => state.path.name);
  return (
    <StyleWrapper>
      <Panel name={name} content={[]} />
    </StyleWrapper>
  );
};

export default MyDocuments;
