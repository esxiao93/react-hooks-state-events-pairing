import React, {useState} from 'react';

function Buttons({upvotes, downvotes, isHideComments, handleHideComments}) {

    const [upvote, setUpvote] = useState (upvotes)
    const [downvote, setDownvote] = useState (downvotes)

    function handleUpvotes() {
        setUpvote((upvote) => upvote + 1)
    }

    function handleDownvotes() {
        setDownvote((downvote) => downvote + 1)
    }

    return(
        <div>
            <button onClick={handleUpvotes}>{upvote} 👍</button>
            <button onClick={handleDownvotes}>{downvote} 👎</button>
            <br/>
            <br/>
            <button onClick={handleHideComments}>{isHideComments ? "Hide" : "Show"} Comments</button>
        </div>
    )
}

export default Buttons;