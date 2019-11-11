import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 20px;
  width: 270px;
  border-radius: 7px;
  padding: 20px;
  margin: 10px 10px 0;
  outline: none;
  border: none;
  font-weight:${({ theme }) => theme.font.bold};
  background: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.buttonActive};
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  /* /* border-top: 2px solid ${({ theme }) => theme.colors.inputGrey}; */

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  } 

`;
const StyledLabel = styled.label`
  width: 270px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.colors.buttonActive};
  /* margin-left: 10px; */
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  width: ${({ isSmall }) => (isSmall ? '50%' : '100%')};

  span {
    align-self: flex-start;
    margin: 5px 10px;
    color: ${({ theme }) => theme.colors.alertColor};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Input = ({ type, id, placeholder, value, onChange, isSmall, error }) => {
  console.log(' login this.props', error);
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
      <span>{error}</span>
    </StyledWrapper>
  );
};
Input.propType = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
  error: '',
};

export default Input;
