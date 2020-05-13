import React, {useState,useEffect} from "react";

        // First Example Destructurin Arry use Method 

function One(){

    const [name,setname] = useState("sohail");
    const [roll,setroll] = useState("039905")

    const  O = () => {
        setname("memon")
        setroll("CNC-039905")
    }


    return (
        <React.Fragment>
            <h1>Hello Hook It's {name}</h1>
            <h2>Roll No : {roll}</h2>
            <button onClick= {O}>Click</button>
        </React.Fragment>
    )
}

            // Second Example Normal Use 


// const One = () => {

//     const Hookname = useState("sohail");

//     function O(){
//         Hookname[1]("memon")
//     }

//     return(
//         <React.Fragment>
//             <h1>Hello Hook it's {Hookname[0]}</h1>
//             <button onClick={O}>click</button>
//         </React.Fragment>
//     )
// }

                // Third Example 

// const One = () => {

//     const Hookname = useState(0);

//     const O = () => {
//         Hookname[1](Hookname[0] + 1)
//     };

//     const D = () => {
//         Hookname[1](Hookname[0] - 1)
//     }

//     return(
//         <React.Fragment>
//             <h1>Count Up:{Hookname[0]}</h1>
//             <button onClick = {O} >Increment</button>
//             <button onClick = {D}>Decrement</button>
//         </React.Fragment>
//     )
    
// }


    // Firsr Exmaple of UseEffect Method 

// const One = () => {

//     const [count ,setcount] = useState(0);
//     const [count1 ,setcount1] = useState(50);

//     const O = () =>{
//         setcount(count + 1)
//     }

//     const D = () =>{
//         setcount1(count1 - 1)
//     };

//         useEffect(() => {
//             console.log("use effect Clicked")
//         },[count]);

//     return (
//         <React.Fragment>
//             <h1>Count Up: {count}</h1>
//             <button onClick ={O} >Increment</button>
//             <h2>Count Down: {count1}</h2>
//             <button onClick = {D}>Decrement</button>
//         </React.Fragment>
//     )
    
// }




export default One;