const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';
const CLEAR_REQUEST = 'CLEAR_REQUEST';

const initialState = {};

const serverResponse = (state = initialState, { type, payload }) => {
  console.log('type,payload', type, payload)
  switch (type) {
    case REQUEST_SUCCESS:
      return {
        error: undefined,
        success: payload.success,
      };
    case REQUEST_FAIL:
      return {
        error: payload.error,
        success: undefined
      };
    case CLEAR_REQUEST:
      return {
        error: undefined,
        success: undefined
      };
    default:
      return state;
  }
};

export default serverResponse;
