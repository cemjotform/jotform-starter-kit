import React from 'react';
import PropTypes from 'prop-types';

import Submission from '../Submission';

const SubmissionList = ({ submissions }) => (submissions.length !== 0
  ? submissions.map(({ id }) => (<Submission id={id} key={`submission_${id}`} />))
  : <div>Empty Submission List</div>);

SubmissionList.propTypes = {
  submissions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  }))
};

SubmissionList.defaultProps = {
  submissions: []
};

export default SubmissionList;
