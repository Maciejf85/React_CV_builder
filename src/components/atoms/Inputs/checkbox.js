import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 20px;
  border-radius: 7px;
  padding: 10px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  margin-left: 10px;
`;
const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.colors.buttonActive};
  &:hover {
    cursor: pointer;
  }
`;
const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${({ isSmall }) => (isSmall ? '50%' : '100%')};
`;

const Checkbox = ({ type, id, placeholder, value, onChange, isSmall }) => {
  return (
    <StyledWrapper isSmall={isSmall}>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        checked={value}
      />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </StyledWrapper>
  );
};

Checkbox.propType = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
  error: '',
};

export default Checkbox;
