const initialState = {
    isLoading: false,
    isError: false,
    data: {},
}

  export const UserData =  (state=initialState, action) => {
    switch (action.type) {
      case 'GET_USER_REQUESTED':
        return { ...state, isLoading: true };
      case 'GET_USER_DONE':
        return { ...state, isLoading: false, data: action.payload };
      case 'GET_USER_FAILED':
        return { ...state, isLoading: false, isError: true}
      default:
        return state;
    }
  };