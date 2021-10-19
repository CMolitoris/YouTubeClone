import React from 'react';
import './DisplayDescription.css';
import Accordion from 'react-bootstrap/Accordion'


const DisplayDescription = (props) => {
    if(props.description.length>1) {
        return ( 
            <div>
                <Accordion className='panel-style shadow'>
                    <Accordion.Item className='bg-dark' eventKey='0'>
                        <Accordion.Button className='panel-toggle panel-height bg-dark' eventKey='0'>
                            <h3 className='panel-toggle ms-auto text-center'>Description</h3>
                        </Accordion.Button>    
                        <Accordion.Body>
                            {props.description.map((element,index)=>{
                                return (
                                    <p key={index}>
                                        {element}
                                    </p>
                                )   
                            })} 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
         );
    }
    return (
        <div></div>
    )
    
}
 
export default DisplayDescription;