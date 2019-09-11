const initialState = {
  currentView: 'personal',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'personal':
      return {
        currentView: 'personal',
      };
    case 'education':
      return {
        currentView: 'education',
      };
    case 'languages':
      return {
        currentView: 'languages',
      };
    case 'skills':
      return {
        currentView: 'skills',
      };
    case 'interest':
      return {
        currentView: 'interest',
      };
    case 'confidential':
      return {
        currentView: 'confidential',
      };

    default:
      return state;
  }
};

export default path;
