import React from 'react';
import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    console.log(comment);
    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = 'This comment is waiting moderation';
    }
    if (comment.status === 'rejected') {
      content = 'This comment has been rejected';
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

CommentsList.propTypes = {
  postId: PropTypes.string,
};

export default CommentsList;
