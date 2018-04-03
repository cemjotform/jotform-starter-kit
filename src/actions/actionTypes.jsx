import { makeAsyncActions } from '../utils';

// Sync action definitions
const syncActions = [

].reduce((prev, curr) => ({
  ...prev,
  [curr]: curr
}), {});

// Async action definitions
const asyncActions = [
  'SUBMISSIONS'
].reduce((prev, curr) => ({
  ...prev,
  [curr]: makeAsyncActions(curr)
}), {});


// Export actions under an object
export default {
  ...syncActions,
  ...asyncActions
};
