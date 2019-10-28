import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DescriptionInput = styled.textarea`
  height: 45px;
  display: inline-block;
  width: 400px;
  border-radius: 7px;
  padding: 5px 15px;
  margin: 5px 15px;
  outline: none;
  border: none;
  resize: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-top: 2px solid ${({ theme }) => theme.colors.inputGrey};

  &:focus {
    border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
  }
`;
const StyledLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-left: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: ${({ isSmall }) => (isSmall ? '50%' : '100%')};
`;

const DescriptionInp = ({ id, placeholder, value, onChange, isSmall }) => {
  return (
    <StyledWrapper isSmall={isSmall}>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      <DescriptionInput id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </StyledWrapper>
  );
};
DescriptionInp.propType = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
DescriptionInp.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
};

export default DescriptionInp;
