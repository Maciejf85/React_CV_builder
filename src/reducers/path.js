const initialState = {
  currentView: 'account',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'cv':
      return {
        currentView: 'cv',
      };
    case 'documents':
      return {
        currentView: 'documents',
      };
    case 'account':
      return {
        currentView: 'account',
      };
    case 'confidentiality':
      return {
        currentView: 'confidentiality',
      };

    default:
      return state;
  }
};

export default path;
