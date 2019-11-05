import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';

const PosedPanel = posed.div({
  visible: { x: '30px', opacity: 1, transition: { duration: 300 } },
  hidden: { x: '100%', opacity: 0, transition: { ease: [0.28, -0.64, 0.3, 1.26], duration: 700 } },
});

const StyledWrapper = styled(PosedPanel)`
  position: absolute;
  right: 0;
  bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  width: 250px;
  height: 50px;
  background: ${({ error, theme }) =>
    !error ? theme.colors.secondaryBlue : theme.colors.alertColor};
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;

  color: white;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.ms};
  overflow: hidden;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 26px;
    transform: translate(-50%, -50%);
  }
  .leftSide {
    position: relative;
    width: 50px;
    height: 100%;
    background: ${({ error, theme }) =>
    !error ? theme.colors.successColor : theme.colors.alertColor};
  }
  #circle{
    stroke-dashoffset:1000;
    stroke-dasharray:1000;
    animation-name: active;
    animation-duration:6s;
    animation-fill-mode:forwards;
  }
  #Union_1{
    stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: active 5s ease-in forwards;
  animation-delay:0.3s;
  }

  @keyframes active {
   to {
     stroke-dashoffset:0;
   } 
  }
`;

const ConfirmSidePanel = ({ pose }) => {
  const { content, error, inProgress } = useSelector(state => state.appState);
  return (
    <StyledWrapper pose={pose} error={error}>
      <div className="leftSide">
        {inProgress && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48 ">
          <g id="Group_1" data-name="Group 1" transform="translate(0 0)">
            <g id="circle" data-name="Ellipse 1" transform="translate(2 2)" stroke="white" strokeWidth="4">
              <circle cx="23" cy="23" r="18" fill="none" />
            </g>
            <polyline id="Union_1" data-name="Union 1" points="0,0 9,8 9,8 20,-8" transform="translate(15 26)" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </g>
        </svg>}

      </div>
      <div>
        <p>{content}</p>
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
