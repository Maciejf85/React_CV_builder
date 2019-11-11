const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';

const initialState = {};

const personalData = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_SUCCESS:
      return {
        success: payload.success,
      };
    case REQUEST_FAIL:
      return {
        error: payload.error,
      };
    default:
      return state;
  }
};

export default personalData;
