import React from 'react';
import styled from 'styled-components';
import { getPanelName } from 'functions';
import PanelButton from 'components/atoms/Buttons/PanelButtons';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

// import store from 'store';

const StyledComponents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .panelTitle {
    color: ${({ theme }) => theme.colors.buttonActive};
    font-style: italic;
  }
`;

const InputHeader = ({ index, current, newItem, removeItem, language }) => {
  const isPolish = language === 'PL';
  const panelName = getPanelName(current);
  return (
    <StyledComponents>
      <div className="panelTitle">{`${
        isPolish ? panelName.name : panelName.nameL
      }  #${index}`}</div>
      <div>
        <PanelButton icon={faPlus} handleAction={newItem} />
        <PanelButton remove icon={faTimes} handleAction={removeItem} />
      </div>
    </StyledComponents>
  );
};

export default InputHeader;
