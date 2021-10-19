import React from 'react';

const DisplayDescription = (props) => {
    if(props.description.length>1) {
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
    return (
        <div></div>
    )
    
}
 
export default DisplayDescription;