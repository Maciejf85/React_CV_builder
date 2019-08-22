import React from 'react';
import styled, { css } from 'styled-components';

// const PosedPanel = posed.div({
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// });

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  position: absolute;
  padding: 10px;
  right: 0;
  bottom: 100px;
  color: white;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.ms};

  ${props =>
    props.primary &&
    css`
      background: #000;
    `}
`;

const ConfirmSidePanel = () => {
  return (
    <StyledWrapper>
      <p>zapisane</p>
    </StyledWrapper>
  );
};

export default ConfirmSidePanel;
