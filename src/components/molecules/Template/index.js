import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 423px;
  border: 1px solid #ccc;
  margin: 0 50px;
  transform: ${({ active }) => (active ? 'scale(1.2)' : 'none')};
  filter: ${({ active }) => (active ? 'brightness(100%)' : 'brightness(45%)')};
  transition: all 0.4s;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    cursor: pointer;
    transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1.15)')};
    filter: ${({ active }) => (active ? 'brightness(100%)' : 'brightness(100%)')};
  }

  img {
    width: 100%;
  }

  header {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 20px;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    text-align: center;
    color: black;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 200px;
    height: 282px;
    margin: 0 25px;
  }
`;

const Template = ({ active, img, changeTemplate, id }) => {
  return (
    <StyledWrapper active={active} onClick={changeTemplate}>
      <header>template {id}</header>
      <img src={img} alt="pdf template" id={id} />
    </StyledWrapper>
  );
};

export default Template;
