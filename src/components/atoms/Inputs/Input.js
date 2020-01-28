import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 45px;
  border-radius: 7px;
  padding: 5px 15px;
  margin: 5px 15px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-top: 2px solid
    ${({ theme, error }) => (error ? theme.colors.alertColor : theme.colors.inputGrey)};
  color: ${({ theme, error }) => (error ? theme.colors.alertColor : theme.colors.primaryGrey)};

  &:focus {
    border-top: 2px solid
      ${({ theme, error }) => (error ? theme.colors.alertColor : theme.colors.lightBlue)};
  }
`;
const StyledLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-left: 15px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: ${({ isSmall }) => (isSmall ? '50%' : '100%')};
  span {
    /* align-self: flex-start; */
    margin: 0 15px;
    min-height: 14px;
    color: ${({ theme, error }) => (error ? theme.colors.alertColor : theme.colors.buttonActive)};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media ${({ theme }) => theme.media.small} {
    width: 100%;
  }
  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }
`;

const Input = ({ type, id, placeholder, value, onChange, onBlur, isSmall, error, tip }) => {
  return (
    <StyledWrapper isSmall={isSmall}>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      <StyledInput
        type={type}
        // id={id}
        // placeholder={placeholder}
        data-id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        tip={tip}
      />
      {tip && <span>{tip}</span>}
    </StyledWrapper>
  );
};
Input.propType = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
};

export default Input;
