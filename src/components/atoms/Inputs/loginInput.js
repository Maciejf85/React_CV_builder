import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 20px;
  width: 270px;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  /* border-top: 2px solid ${({ theme }) => theme.colors.inputGrey};

  &:focus {
    border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
  } */
`;
const StyledLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-left: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: ${({ isSmall }) => (isSmall ? '50%' : '100%')};
`;

const Input = ({ type, id, placeholder, value, onChange, onBlur, isSmall }) => {
  return (
    <StyledWrapper isSmall={isSmall}>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledWrapper>
  );
};
Input.propType = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
};

export default Input;
