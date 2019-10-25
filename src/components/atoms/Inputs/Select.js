import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.select`
  height: 45px;
  width: 130px;
  border-radius: 7px;
  padding: 5px 15px;
  margin: 5px 10px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-top: 2px solid ${({ theme }) => theme.colors.inputGrey};

  &:focus {
    border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
  }
`;
const StyledLabel = styled.label`
  min-height: ${({ theme }) => theme.fontSize.s};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-left: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Select = ({ id, title, value, onChange, onBlur, start, end }) => {
  const count = end - start;
  const dates = Array.from(Array(count), (x, index) => index + start + 1);
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput id={id} value={value} onChange={onChange} onBlur={onBlur}>
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
