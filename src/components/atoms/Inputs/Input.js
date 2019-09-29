import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px 15px;
  outline: none;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.mediumGrey};
`;

const Input = ({ type, id, placeholder, value, onChange, onBlur }) => {
  return (
    <StyledWrapper
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
Input.propType = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
