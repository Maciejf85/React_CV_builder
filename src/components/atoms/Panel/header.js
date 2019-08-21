import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import { useSelector } from 'react-redux';
import { editConfidential } from 'actions';
import store from 'store';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.font.bold};
  background: ${({ theme }) => theme.colors.lightGrey};
`;

const Header = ({ name }) => {
  const editValue = useSelector(state => state.confidential.edit);
  return (
    <StyledWrapper>
      <p>{name}</p>
      <p>{editValue.toString()}</p>

      <PrimaryButton type="button" onClick={() => store.dispatch(editConfidential())}>
        {editValue ? 'Zapisz' : 'Edytuj'}
      </PrimaryButton>
    </StyledWrapper>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
