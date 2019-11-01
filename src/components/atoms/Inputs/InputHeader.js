import React from 'react';
import styled from 'styled-components';
import { getPanelName } from 'functions';
import PanelButton from 'components/atoms/Buttons/PanelButtons';
// import { removeItemfromCurrentCv } from 'actions';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

// import store from 'store';

const StyledComponents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputHeader = ({ index, current, newItem, removeItem }) => {
  return (
    <StyledComponents>
      <div>{`${getPanelName(current)}  #${index}`}</div>
      <div>
        <PanelButton icon={faPlus} handleAction={newItem} />
        <PanelButton remove icon={faTimes} handleAction={removeItem} />
      </div>
    </StyledComponents>
  );
};

export default InputHeader;
