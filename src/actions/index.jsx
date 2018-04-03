import axios from 'axios';
import ActionTypes from './actionTypes';

const {
  SUBMISSIONS
} = ActionTypes;

export const getRandomFormSubmissions = () => ({
  types: SUBMISSIONS,
  callAPI: () => axios.get('https://api.jotform.com/hackweek/submissions', {
    withCredentials: true
  })
});

export const getFormSubmissions = formID => ({
  types: SUBMISSIONS,
  shouldCallAPI: ({ submission: { submissions } }) => !submissions[formID],
  callAPI: () => axios.get(`https://api.jotform.com/hackweek/submissionsid=${formID}`, {
    withCredentials: true
  }),
  payload: { formID }
});

