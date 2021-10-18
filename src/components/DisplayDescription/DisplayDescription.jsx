import React from 'react';

const DisplayDescription = (props) => {
    return ( 
        <div>
            <h3>Description</h3>
               {props.description.map((element,index)=>{
                   return (
                    <p key={index}>
                        {element}
                    </p>
                   )
                   
               })} 
        </div>
     );
}
 
export default DisplayDescription;