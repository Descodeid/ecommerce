const initState = {
  uri: '',
};

export const photoReducer = (state = initState, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.source.uri,
    };
  }
  return state;
};
