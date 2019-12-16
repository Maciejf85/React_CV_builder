import React from 'react';
import styled from 'styled-components';
import { changeLanguage } from 'actions';
import store from 'store';

const StyledWrapper = styled.div`
  width: 45px;
  height: 20px;
  background-image: url(${({ icon }) => icon});
  background-position: center center;
  background-size: cover;
  border: 1px solid ${({ theme }) => theme.colors.buttonCaption};
  padding: 5px;
  margin-right: 10px;
  filter: brightness(45%);
  transition: all 0.3s;
  &.active {
    transform: scale(1.1);
    filter: brightness(100%);
  }

  &:hover {
    cursor: pointer;
    filter: brightness(100%);
    transform: scale(1.1);
  }
`;

const LanguageButton = ({ language, icon, active }) => {
  return (
    <StyledWrapper
      onClick={() => store.dispatch(changeLanguage(language))}
      icon={icon}
      className={active && 'active'}
    />
  );
};

export default LanguageButton;
