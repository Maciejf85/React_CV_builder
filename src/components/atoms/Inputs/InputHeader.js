import React from 'react';
import styled from 'styled-components';
import { getPanelName } from 'functions';

const StyledComponents = styled.div`
  width: 100%;
`;

const InputHeader = ({ index, current, id }) => {
  return (
    <StyledComponents>
      <div>{`${getPanelName(current)}  #${index}`}</div>
    </StyledComponents>
  );
};

export default InputHeader;
