const initialState = [];

const skills = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SHOW_DATA': {
      return payload;
    }
    default:
      return state;
  }
};
export default skills;
