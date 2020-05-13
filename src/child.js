import React from "react";

const Child = (props) =>{
    console.log(props.value, "child props")

    return(
        <div>
            {
                props.value.map((text)=>{
                    return(
                        <li className="color">{text}</li>
                    )
                })
            }
        </div>
    )

}

export default Child;