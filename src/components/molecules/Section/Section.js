import React from 'react';
import styled from 'styled-components';
import SectionHeader from 'components/atoms/Section/SectionHeader';
import SectionBody from 'components/atoms/Section/SectionBodyUser';
import { mainViews } from 'data/index';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  border-bottom-color: hsl(210, 3%, 85%);
  overflow: hidden;
`;
const Section = () => {
  return (
    <StyledWrapper>
      <SectionHeader name={mainViews} />
      <SectionBody />
    </StyledWrapper>
  );
};

export default Section;
