const initialState = {
  name: 'Maciej',
  surname: 'Fiałkowski',
  adress: '',
  email: '',
  birthday: '',
  github: '',
  linkedin: '',
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
