import React from 'react';
import Comments from "./Comments";

function CommentsList({comments, isHideComments, handleHideComments}) {

    const commentsList = comments.map((comment) => {
        return <Comments key={comment.id} user={comment.user} comment={comment.comment} />
      })

  return (
    <div onClick={handleHideComments}>
      {isHideComments ? <><h2>2 Comments</h2> {commentsList}</> : null}
    </div>
  )
}

export default CommentsList;