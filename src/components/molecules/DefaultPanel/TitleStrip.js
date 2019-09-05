import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.lightBlue};
`;
const TitleStrip = () => {
  return (
    <StyleWrapper>
      <div>tytuł</div>
      <div>data utworzenia</div>
      <div>opcje</div>
    </StyleWrapper>
  );
};

export default TitleStrip;
