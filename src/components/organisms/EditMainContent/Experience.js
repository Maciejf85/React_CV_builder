import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExperiencePanel from 'components/molecules/SectionInputs/ExperiencePanel';
import NewItemButton from 'components/atoms/Buttons/newItemButton';
import styled from 'styled-components';
import store from 'store';
import { setNewCurrentCVData } from 'functions';
import { addNewItemToCurrentCv } from 'actions';

const StyledWrapper = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  @media ${({ theme }) => theme.media.medium} {
    margin-top: 50px;
  }
`;

class Experience extends Component {
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
        name: '',
        position: '',
        startYear: 2000,
        startMonth: 1,
        endYear: 2000,
        endMonth: 1,
        description: '',
        inProgress: false,
      }),
    );
  };

  render() {
    const { cvId, currentCv, current, language } = this.props;
    const { experience } = currentCv;
    const { currentView } = current;
    return (
      <StyledWrapper>
        {experience.length ? (
          experience.map((item, idx) => {
            const { id } = item;
            return (
              <ExperiencePanel
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
          <NewItemButton view={currentView} handleClick={this.handleNewItem} />
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
export default connect(mapStateToProps)(Experience);
