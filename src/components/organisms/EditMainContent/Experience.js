import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExperiencePanel from 'components/molecules/SectionInputs/ExperiencePanel';
import NewItemButton from 'components/atoms/Buttons/newItemButton';
import store from 'store';
import { setNewCurrentCVData } from 'functions';
import { addNewItemToCurrentCv } from 'actions';

class Experience extends Component {
  componentDidMount() {
    console.log(' Mount - Education Component');
  }

  componentDidUpdate() {
    const { cvId, currentCv } = this.props;
    const token = sessionStorage.getItem('userID');
    store.dispatch(setNewCurrentCVData('update', token, cvId, currentCv));
  }

  handleNewItem = () => {
    const { current } = this.props;
    const { currentView } = current;

    store.dispatch(
      addNewItemToCurrentCv(currentView, {
        name: '',
        employer: '',
        startYear: 2000,
        startMonth: 1,
        endYear: 2000,
        endMonth: 1,
        description: '',
      }),
    );
  };

  render() {
    const { cvId, currentCv, current } = this.props;
    const { experience } = currentCv;
    const { currentView } = current;
    return (
      <>
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
              />
            );
          })
        ) : (
          <NewItemButton view={currentView} handleClick={this.handleNewItem} />
        )}
      </>
    );
  }
}
const mapStateToProps = ({ currentCv, editComponentView }) => ({
  currentCv,
  cvId: currentCv.currentItem.id,
  current: editComponentView,
});
export default connect(mapStateToProps)(Experience);
