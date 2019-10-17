const initialState = {
  name: 'Moje konto',
  currentView: 'account',

};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'cv':
      return {
        name: 'Moje CV',
        currentView: 'cv',
        caption: 'nowe CV'
      };
    case 'documents':
      return {
        name: 'Moje listy motywacyjne',
        currentView: 'documents',
        caption: 'nowy dokument'
      };
    case 'account':
      return {
        name: 'Moje konto',
        currentView: 'account',
      };
    case 'confidentiality':
      return {
        name: 'Klauzula poufności',
        currentView: 'confidentiality',
      };

    default:
      return state;
  }
};

export default path;
