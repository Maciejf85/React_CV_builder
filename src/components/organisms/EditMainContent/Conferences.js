import React, { Component } from 'react';
import ConferencesPanel from 'components/molecules/SectionInputs/ConferencesPanel';
import NewItemButton from 'components/atoms/Buttons/newItemButton';
import store from 'store';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setNewCurrentCVData } from 'functions';
import { addNewItemToCurrentCv } from 'actions';

const StyledWrapper = styled.div`
  margin: 10px 0 0 10px;
  @media ${'(min-width:320px) and (max-width:575.98px) and (orientation: landscape)'} {
    margin-top: 50px;
  }

  @media ${({ theme }) => theme.media.medium} {
    margin-top: 50px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 50px;
  }
`;

class Conferences extends Component {
  componentDidUpdate(prevProps) {
    const { language } = prevProps;
    if (language === this.props.language) {
      const { cvId, currentCv } = this.props;
      const token = sessionStorage.getItem('userID');
      store.dispatch(setNewCurrentCVData('update', token, cvId, currentCv));
    }
  }

  handleNewItem = () => {
    const { current } = this.props;
    const { currentView } = current;

    store.dispatch(
      addNewItemToCurrentCv(currentView, {
        description: '',
        endYear: 2000,
        endMonth: 1,
      }),
    );
  };

  render() {
    const { cvId, currentCv, current, language } = this.props;
    const { conferences } = currentCv;
    const { currentView } = current;
    return (
      <StyledWrapper>
        {conferences.length ? (
          conferences.map((item, idx) => {
            const { id } = item;
            return (
              <ConferencesPanel
                key={id}
                index={idx}
                item={item}
                cvId={cvId}
                current={currentView}
                newItem={this.handleNewItem}
                language={language}
              />
            );
          })
        ) : (
          <NewItemButton view={currentView} handleClick={this.handleNewItem} language={language} />
        )}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ currentCv, editComponentView }) => ({
  currentCv,
  cvId: currentCv.currentItem.id,
  current: editComponentView,
});

export default connect(mapStateToProps)(Conferences);
