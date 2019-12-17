import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: ${({ theme }) => theme.font.bold};
  background: ${({ theme }) => theme.colors.lightGrey};
`;
const SectionHeader = () => {
  const name = useSelector(({ path }) => ({ nameP: path.name, nameL: path.nameL }));
  const language = useSelector(({ appState }) => appState.language);
  return <StyledWrapper>{language === 'PL' ? name.nameP : name.nameL}</StyledWrapper>;
};

export default SectionHeader;
