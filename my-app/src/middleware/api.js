/* eslint-disable no-unused-vars */

const log = ({ dispatch, getState }) => next => action => {
  next(action);
};

export default log;
