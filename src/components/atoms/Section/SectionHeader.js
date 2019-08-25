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
`;
const SectionHeader = props => {
  const { name } = props;
  return (
    <StyledWrapper>
      <h6>{name}</h6>
    </StyledWrapper>
  );
};

SectionHeader.prototype = {
  name: propTypes.string.isRequired,
};

export default SectionHeader;
