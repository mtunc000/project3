import React from 'react';


let individual = (props) =>{

    const style= {

        display: 'inline-block',
        border: '3px dashed blue',
        textAllign:'center',
        margin:'16 px',
        padding: '16px',

    }

   

return (
<div style = {style}>

    

    {
        props.inputLength >= 6 ?
        <p>"long enough"</p>:
        <p>"please use at least 6 character"</p>

    }






</div>



);



};

export default individual;
