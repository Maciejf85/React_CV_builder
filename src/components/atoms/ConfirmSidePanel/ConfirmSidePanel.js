import React from 'react';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const PosedPanel = posed.div({
  visible: { x: '30px', opacity: 1, transition: { duration: 300 } },
  hidden: { x: '100%', opacity: 0, transition: { ease: [0.28, -0.64, 0.3, 1.26], duration: 700 } },
});

const StyledWrapper = styled(PosedPanel)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
  width: 200px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  position: absolute;
  /* padding: 10px; */
  /* padding-right: 30px; */
  right: 0;
  bottom: 100px;
  color: white;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.ms};
  overflow: hidden;

  .icon {
    position: absolute;
    top:50%;
    left: 50%;
    font-size: 26px;
    transform:translate(-50%,-50%)
  }
  .leftSide{
    position:relative;
    width:50px;
    height:100%;
    background: ${({ theme }) => theme.colors.secondaryBlue};

  }

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 50px;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondaryBlue};
  } */

  ${({ error }) =>
    error &&
    css`
      background: ${({ theme }) => theme.colors.alertColor};
    `}
`;

const ConfirmSidePanel = ({ pose, error }) => {
  return (
    <StyledWrapper pose={pose} error={error}>
      <div className="leftSide">
        <FontAwesomeIcon icon={faCheckCircle} className="icon" />
      </div>
      <div>
        <p>{error ? 'błąd serwera' : 'zapisane'}</p>
      </div>
    </StyledWrapper>
  );
};

ConfirmSidePanel.propTypes = {
  pose: Proptypes.string,
  error: Proptypes.bool,
};

ConfirmSidePanel.defaultProps = {
  pose: 'hidden',
  error: false,
};

export default ConfirmSidePanel;
