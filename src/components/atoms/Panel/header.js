import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.font.bold};
  background: ${({ theme }) => theme.colors.lightGrey};
`;

const header = ({ name }) => {
  return (
    <StyledWrapper>
      <p>{name}</p>
    </StyledWrapper>
  );
};

header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default header;
