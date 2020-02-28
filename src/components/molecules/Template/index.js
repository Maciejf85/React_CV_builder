import React from 'react';
import styled from 'styled-components';
import temp1_1 from 'assets/template/t1-1.jpg';
import temp1_2 from 'assets/template/t1-2.jpg';
import temp1_3 from 'assets/template/t1-3.jpg';
import temp1_4 from 'assets/template/t1-4.jpg';
import temp1_5 from 'assets/template/t1-5.jpg';
import temp1_6 from 'assets/template/t1-6.jpg';
import temp1_7 from 'assets/template/t1-7.jpg';
import temp2_1 from 'assets/template/t2-1.jpg';
import temp2_2 from 'assets/template/t2-2.jpg';
import temp2_3 from 'assets/template/t2-3.jpg';
import temp2_4 from 'assets/template/t2-4.jpg';
import temp2_5 from 'assets/template/t2-5.jpg';
import temp2_6 from 'assets/template/t2-6.jpg';
import temp2_7 from 'assets/template/t2-7.jpg';
import temp3_1 from 'assets/template/t3-1.jpg';
import temp3_2 from 'assets/template/t3-2.jpg';
import temp3_3 from 'assets/template/t3-3.jpg';
import temp3_4 from 'assets/template/t3-4.jpg';
import temp3_5 from 'assets/template/t3-5.jpg';
import temp3_6 from 'assets/template/t3-6.jpg';
import temp3_7 from 'assets/template/t3-7.jpg';

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
  @media ${'(min-width: 1200px) and (max-width: 1598.98px) and (orientation:landscape)'} {
    width: 212px;
    height: 300px;
    margin: 0 55px;
  }
`;

const Template = ({ active, changeTemplate, id, language, ratio, color }) => {
  const isPolish = language === 'PL';
  const images = [
    [temp1_1, temp1_2, temp1_3, temp1_4, temp1_5, temp1_6, temp1_7],
    [temp2_1, temp2_2, temp2_3, temp2_4, temp2_5, temp2_6, temp2_7],
    [temp3_1, temp3_2, temp3_3, temp3_4, temp3_5, temp3_6, temp3_7],
  ];
  return (
    <StyledWrapper active={active} onClick={changeTemplate}>
      <header>
        {isPolish ? 'Szablon ' : 'Template '} #{id}
      </header>
      <img src={images[id - 1][color - 1]} alt="pdf template" id={id} />
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
