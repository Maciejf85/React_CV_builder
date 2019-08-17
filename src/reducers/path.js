const initialState = {
  currentPath: '/',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'main':
      return {
        currentPath: '/',
      };
    case 'edit':
      return {
        currentPath: '/edit',
      };
    case 'preview':
      return {
        currentPath: '/preview',
      };
    default:
      return state;
  }
};

export default path;
