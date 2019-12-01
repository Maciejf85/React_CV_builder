import React, { Component } from 'react';
import LicensesPanel from 'components/molecules/SectionInputs/LicensesPanel';
import NewItemButton from 'components/atoms/Buttons/newItemButton';
import store from 'store';
import { connect } from 'react-redux';
import { setNewCurrentCVData } from 'functions';
import { addNewItemToCurrentCv } from 'actions';

class Licenses extends Component {
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
        description: '',
        endYear: 2000,
        endMonth: 1,
      }),
    );
  };

  render() {
    const { cvId, currentCv, current } = this.props;
    const { licenses } = currentCv;
    const { currentView } = current;
    return (
      <>
        {licenses.length ? (
          licenses.map((item, idx) => {
            const { id } = item;
            return (
              <LicensesPanel
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

export default connect(mapStateToProps)(Licenses);
