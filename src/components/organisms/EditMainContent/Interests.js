import React, { Component } from 'react';
import InterestsPanel from 'components/molecules/SectionInputs/InterestsPanel';
import NewItemButton from 'components/atoms/Buttons/newItemButton';
import store from 'store';
import { connect } from 'react-redux';
import { setNewCurrentCVData } from 'functions';
import { addNewItemToCurrentCv } from 'actions';

class Interest extends Component {
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
        description: '',
      }),
    );
  };

  render() {
    const { cvId, currentCv, current } = this.props;
    const { interests } = currentCv;
    const { currentView } = current;
    return (
      <>
        {interests.length ? (
          interests.map((item, idx) => {
            const { id } = item;
            return (
              <InterestsPanel
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

const mapStateToProps = state => ({
  currentCv: state.currentCv,
  cvId: state.currentCv.currentItem.id,
  current: state.editComponentView,
});

export default connect(mapStateToProps)(Interest);
