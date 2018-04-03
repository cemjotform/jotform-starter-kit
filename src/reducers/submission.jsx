const initialState = {
  loaded: false,
  data: []
};

const submissionReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default submissionReducer;
