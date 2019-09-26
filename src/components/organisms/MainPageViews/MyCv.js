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

const CvList = () => {
  const cvList = useSelector(state => state.myCv);
  const list = cvList.map(item => item);

  console.log('cvList', cvList);
  return (
    <StyleWrapper>
      <Panel name="Moje CV" content={list} />
    </StyleWrapper>
  );
};

export default CvList;
