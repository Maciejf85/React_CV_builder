const changeName = (payload = { name: 'MACIEJ' }) => {
  return {
    type: 'changeName',
    payload,
  };
};

export default changeName;
