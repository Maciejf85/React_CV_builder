import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.select`
  height: 45px;
  width: 130px;
  border-radius: 7px;
  padding: 5px 15px;
  margin: 5px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-top: 2px solid ${({ theme }) => theme.colors.inputGrey};
  &:hover:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus {
    border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
  }
  @media ${({ theme }) => theme.media.small} {
    width: 45%;
    min-width: 90px;
  }
  @media ${({ theme }) => theme.media.medium} {
    width: 25%;
    min-width: 100px;
  }
  @media ${'(min-width:768px) and (max-width: 1199.98px) and (orientation: portrait)'} {
    width: 25%;
    min-width: 100px;
  }

  @media ${' (width:568px) and (orientation: landscape)'} {
    width: 25%;
    min-width: 90px;
  }
  @media ${' (width:812px) and (orientation: landscape)'} {
    width: 25%;
    min-width: 100px;
  }
  @media ${' (width:823px) and (orientation: landscape)'} {
    width: 25%;
    min-width: 100px;
  }
`;
const StyledLabel = styled.label`
  min-height: 14px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme, disabled }) => (disabled ? theme.font.normal : theme.font.bold)};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.inputGrey : 'black')};
  margin-left: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  @media ${({ theme }) => theme.media.small} {
    margin-left: 10px;
  }
  @media ${({ theme }) => theme.media.medium} {
    margin-left: 10px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin-left: 10px;
  }
`;

const Select = ({ id, title, value, onChange, onBlur, start, end, disabled }) => {
  const count = end - start;
  const dates = Array.from(Array(count), (undefind, index) => index + start + 1);
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id} disabled={disabled}>
        {title}
      </StyledLabel>
      <StyledInput
        data-id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        {dates.map(item => (
          <option key={item}>{item}</option>
        ))}
      </StyledInput>
    </StyledWrapper>
  );
};
Select.propType = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
Select.defaultPropTypes = {
  placeholder: '',
};

export default Select;
