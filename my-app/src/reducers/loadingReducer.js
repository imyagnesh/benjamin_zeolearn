export default (state = {}, { type }) => {
  const matches = /(.*)_(SUCCESS|REQUEST|ERROR)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  if (requestState === 'REQUEST') {
    return {
      ...state,
      [requestName]: true,
    };
  }

  const { [requestName]: data, ...rest } = state;

  return rest;
};
