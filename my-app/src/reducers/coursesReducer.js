const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, loading: true };

    case 'ERROR':
      return { ...state, loading: false, error: payload.message };

    case 'LOAD_COURSES_SUCCESS':
      return { ...state, loading: false, data: payload };

    // case 'LOAD_COURSES_FAIL':
    //   return { ...state, loading: false, error: payload };

    case 'ADD_COURSE_SUCCESS':
      return { ...state, loading: false, data: [...state.data, payload] };

    case 'EDIT_COURSE_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id);
      const updateCourses = [
        ...state.data.slice(0, index),
        payload,
        ...state.data.slice(index + 1),
      ];
      return { ...state, loading: false, data: updateCourses };
    }

    case 'DELETE_COURSES_SUCCESS':
      return { ...state, loading: false, data: state.data.filter(x => x.id !== payload.id) };

    case 'RESET_COURSES':
      return initialState;

    default:
      return state;
  }
};
