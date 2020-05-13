import React, { useState, useEffect } from "react";

 function One(){

    const count = useState(0);
    const count1 = useState(50);

    function O(){
        count[1](count[0] + 1);
    }

    function D(){
        count1[1](count[0] - 1);
    }


    useEffect(() => {
        var m = "sohail";
        console.log(m)
    },[count])


    return(
        <React.Fragment>
            <h1>Count Up : {count}</h1>
            <button onClick = {O}>Increament</button>
            <h1>Count Down : {count1}</h1>
            <button onClick = {D}>Increament</button>
        </React.Fragment>
    )
 }

export default One;