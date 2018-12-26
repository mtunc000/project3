import React from 'react';


let clinic = (props) =>{

    const style= {

        display: 'inline-block',
        border: '2px solid red',
        textAllign:'center',
        margin:'16 px',
        padding: '16px',

    }

    let message= "please use at least 6 character";
    
    if (props.inputLength >= 6){
        message = "long enough"
    }

return (
<div style = {style} onChange= {props.clicked} value= {props.value}>

    <p>{message}</p>
    






</div>



);



};

export default clinic;
