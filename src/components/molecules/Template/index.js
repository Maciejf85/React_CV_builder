import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 493px;
  border: 1px solid #ccc;
  margin: 50px;
  transform: ${({ active }) => (active ? 'scale(1.3)' : 'none')};
  filter: ${({ active }) => (active ? 'brightness(100%)' : 'brightness(45%)')};
  transition: all 0.4s;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    cursor: pointer;
    transform: ${({ active }) => (active ? 'scale(1.3)' : 'scale(1.15)')};
    filter: ${({ active }) => (active ? 'brightness(100%)' : 'brightness(100%)')};
  }

  img {
    width: 100%;
    height: 100%;
  }

  header {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    position: absolute;
    bottom: 20px;
    left: 0;
    font-family: 'Satisfy', cursive;
    background: rgba(0, 0, 0, 0.4);
    background: ${({ theme }) => theme.colors.mainGrey};
    opacity: 0.85;
    text-align: center;
    color: white;
    line-height: 50px;
    font-size: 2rem;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    pointer-events: none;
  }
  .info {
    position: absolute;
    bottom: -25px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-style: italic;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.media.small} {
    width: 180px;
    height: 253px;
    margin: 60px 0;
    background: #000;
  }

  @media ${({ theme }) => theme.media.medium} {
    width: 170px;
    height: 240px;
    margin: 60px 0;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 170px;
    height: 240px;
    margin: 0 35px;
  }
  @media ${'(min-width:768px) and (max-width: 1199.98px) and (orientation: landscape)'} {
    width: 150px;
    height: 210px;
    margin: 0 35px;
  }
`;

const Template = ({ active, img, changeTemplate, id, language, ratio, color }) => {
  const isPolish = language === 'PL';
  return (
    <StyledWrapper active={active} onClick={changeTemplate}>
      <header>
        <div>
          {isPolish ? 'Szablon ' : 'Template '} #{id}
        </div>
      </header>
      <img src={img} alt="pdf template" id={id} />
      <div className="info">
        <div>
          {' '}
          * {isPolish ? 'proporcje zdjęcia ' : 'photo aspect ratio '} - {ratio}
        </div>
        <div></div>
      </div>
    </StyledWrapper>
  );
};

export default Template;
