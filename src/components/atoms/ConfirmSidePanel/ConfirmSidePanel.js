import React from 'react';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import Proptypes from 'prop-types';

const PosedPanel = posed.div({
  visible: { x: '0', opacity: 1 },
  hidden: { x: '100%', opacity: 0 },
});

const StyledWrapper = styled(PosedPanel)`
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

  ${({ error }) =>
    error &&
    css`
      background: red;
    `}
`;

const ConfirmSidePanel = ({ pose }) => {
  return (
    <StyledWrapper pose={pose}>
      <p>zapisane</p>
    </StyledWrapper>
  );
};

ConfirmSidePanel.propTypes = {
  pose: Proptypes.string,
};

ConfirmSidePanel.defaultProps = {
  pose: 'hidden',
};

export default ConfirmSidePanel;
