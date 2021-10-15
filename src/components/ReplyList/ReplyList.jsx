import React from 'react';

const ReplyList = (props) => {
    return ( 
        <ul>                   
            {props.replies.map((reply,index)=> {
                return (
                    <li key={index}>{reply.body}</li>
                )
            })}
        </ul>
     );
}
 
export default ReplyList;