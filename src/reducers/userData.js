const initialState = {
  name: 'Maciej',
  surname: 'Fiałkowski',
  age: 34,
};

const userName = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'changeName':
      return payload;

    default:
      return state;
  }
};

export default userName;
