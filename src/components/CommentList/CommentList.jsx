import React from 'react';

const CommentList = (props) => {
    return ( 
        <ul>
            {props.comments.map((comment,index)=>{
                return (
                    <li key={index}>{comment.username}: {comment.body}</li>
                )
            })}
        </ul>
     );
}
 
export default CommentList;

