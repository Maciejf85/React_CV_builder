import React from 'react';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import Proptypes from 'prop-types';

const PosedPanel = posed.div({
  visible: { x: '30px', opacity: 1, transition: { duration: 300 } },
  hidden: { x: '100%', opacity: 0, transition: { ease: [0.28, -0.64, 0.3, 1.26], duration: 700 } },
});

const StyledWrapper = styled(PosedPanel)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  position: absolute;
  padding: 10px;
  padding-right: 30px;
  right: 0;
  bottom: 100px;
  color: white;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.ms};

  ${({ error }) =>
    error &&
    css`
      background: ${({ theme }) => theme.colors.alertColor};
    `}
`;

const ConfirmSidePanel = ({ pose, error }) => {
  return (
    <StyledWrapper pose={pose} error={error}>
      <div>
        <p>{error ? 'błąd serwera' : 'zapisane'}</p>
      </div>
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
