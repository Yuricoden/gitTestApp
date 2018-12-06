const initialState = {
    isLoading: false,
    isError: false,
    data: {},
}

  export const UsersList =  (state=initialState, action) => {
    switch (action.type) {
      case 'GET_USERS_REQUESTED':
        return { ...state, isLoading: true };
      case 'GET_USERS_DONE':
        return { ...state, isLoading: false, data: action.payload };
      case 'GET_USERS_FAILED':
        return { ...state, isLoading: false, isError: true}
      default:
        return state;
    }
  };