import React from 'react';
import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    console.log(comment);
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

CommentsList.propTypes = {
  postId: PropTypes.string,
};

export default CommentsList;
