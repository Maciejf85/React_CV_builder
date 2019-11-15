const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';
const CLEAR_REQUEST = 'CLEAR_REQUEST';
const REQUEST_STARTED = 'REQUEST_STARTED';

const initialState = {};

const serverResponse = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_SUCCESS:
      return {
        error: undefined,
        success: payload.success,
        isActive: false,
      };
    case REQUEST_FAIL:
      return {
        error: payload.error,
        success: undefined,
        isActive: false,
      };
    case CLEAR_REQUEST:
      return {
        error: undefined,
        success: undefined,
      };
    case REQUEST_STARTED:
      return {
        isActive: true,
      };
    default:
      return state;
  }
};

export default serverResponse;
