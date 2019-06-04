const initialState = 'en';

export default (state = initialState, { type, payload }) => {
  console.log('locale reducer');
  switch (type) {
    case 'CHANGE_LOCALE':
      return payload;

    default:
      return state;
  }
};
