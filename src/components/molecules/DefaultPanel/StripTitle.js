import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 5px;
  width: 100%;
  padding: 5px 0;
  margin-bottom: 5px;
  text-align: center;
  font-style: italic;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.mainGrey};
  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`;
const StripTitle = ({ language }) => {
  return (
    <StyleWrapper>
      <div>{language === 'PL' ? 'tytuł' : 'title'}</div>
      <div>{language === 'PL' ? 'data utworzenia' : 'creation date'}</div>
      <div>{language === 'PL' ? 'opcje' : 'options'}</div>
    </StyleWrapper>
  );
};

export default StripTitle;
