/**
 * Action creators for sync actions
 */
export const makeActionCreator = (type, ...argNames) =>
  (...args) => argNames.reduce((prev, arg, index) => ({
    ...prev,
    [argNames[index]]: args[index],
  }), { type });

/**
 * Async action constant generator
 *
 * @param {*} string: Base action constant
 */
export const makeAsyncActions = action => ['request', 'success', 'failure'].reduce((prev, curr) => ({
  ...prev,
  [`${curr}`]: `${action}_${curr.toUpperCase()}`
}), {});
