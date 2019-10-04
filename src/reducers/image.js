const initialState = {
  image: '',
};

const image = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_IMAGE':
      return {
        image: payload,
      };
    default:
      return state;
  }
};
export default image;
