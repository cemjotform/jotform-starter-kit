import { makeActionCreator } from '../utils';

/**
 * Async action middleware for handling async actions
 *
 * @param {*} param0: Object that contains dispatcher and getState of redux
 */
export default ({ dispatch, getState }) => next => (action) => {
  const {
    types,
    callAPI,
    shouldCallAPI = () => true,
    payload = {},
    callbackActions = [],
  } = action;


  // Not an async action
  if (!types || typeof types !== 'object') return next(action);

  // No need to process if required types are not defined in types object
  if (!['request', 'success', 'failure'].every(type => types[type])) return next(action);

  // The api call has already been made so no need to do it again
  if (!shouldCallAPI(getState())) return false;

  // Extracting types from
  const { request, success, failure } = types;

  // Request action dispatch
  dispatch({
    ...payload,
    type: request
  });

  // Dispatch actions depending on async action response
  return callAPI().then(
    response => response.json()
      .then(({ content, ...remainingProps }) => {
        // Success dispatch
        dispatch({
          ...payload,
          type: success,
          content: content || remainingProps
        });

        /**
         * I know this one is ugly. In short it process all call back actions and
         * trigger them with requested stores
         */
        const currentStore = getState();
        callbackActions.forEach(({ type, storeKeys }) =>
          dispatch(makeActionCreator(type, ...storeKeys)(...storeKeys
            .map(storeKey => currentStore[storeKey]))));
      }),
    // Error dispatch in case fetch failed
    error => dispatch({
      ...payload,
      error,
      type: failure
    }),
  );
};