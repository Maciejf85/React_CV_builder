import React from 'react';
import styled from 'styled-components';
import Header from 'components/atoms/Panel/header';
import Body from 'components/atoms/Panel/body';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 250px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  border-bottom-color: hsl(210, 3%, 85%);
  overflow: hidden;
`;

const Panel = () => {
  return (
    <StyledWrapper>
      <Header name="Klauzula poufności" />
      <Body />
      <PrimaryButton type="button">Edytuj</PrimaryButton>
      <PrimaryButton type="button">Zapisz</PrimaryButton>
    </StyledWrapper>
  );
};

export default Panel;
