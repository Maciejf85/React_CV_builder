import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.font.bold};
  background: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
const SectionHeader = props => {
  const { name } = props;
  return (
    <StyledWrapper>
      <h3>{name}</h3>
    </StyledWrapper>
  );
};

SectionHeader.propTypes = {
  name: propTypes.string.isRequired,
};

export default SectionHeader;
