import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryGrey};

  ul {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.buttonActive};
  }
  li {
    font-size: 17px;
    margin: 0 8px;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
    }
    .customeTheme {
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
      padding: 3px 20px;
    }
  }
`;

const StripBody = () => {
  const { info } = useSelector(state => state.cvData);
  const date = new Date(info.date * 1000);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getUTCFullYear();
  const monthArr = [
    'styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień',
  ];

  return (
    <StyleWrapper>
      <div>{info.title}</div>
      <div>{`${day}  ${monthArr[month]}  ${year}`}</div>
      <div>
        <ul>
          <li>
            <span data-tip="edytuj" data-for="edit">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <ReactTooltip id="edit" place="top" effect="solid" className="customeTheme" />
          </li>
          <li>
            <span data-tip="pobierz PDF" data-for="download">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <ReactTooltip id="download" effect="solid" className="customeTheme" />
          </li>
          <li>
            <span data-tip="usuń CV" data-for="delete">
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <ReactTooltip id="delete" effect="solid" className="customeTheme" />
          </li>
        </ul>
      </div>
    </StyleWrapper>
  );
};

StripBody.propTypes = {};

export default StripBody;
