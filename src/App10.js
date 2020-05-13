import React from "react";

// class One extends React.Component{
//     // constructor(props){
//     // super(props) agr constructor banao gay tu div mn {this.props.name} lihnke ki need nhi hoti
//     //     console.log(props)
//     // }

//         // state = {
//         //     name : "sohail"
//         // }

//         Click = () => {
//             console.log("Ok Button Clicked")
//         }


//     render(){
//         return(
//             <div>
//                 <h1>Hello Button How Are Your{this.state.name} </h1>
//                 <button onClick = {this.Click}>Click Here</button>
//             </div>
//         )
//     }
// }


// const One = props => {
// console.log(props)

    



//     function clk(){
//         console.log("Clicked Button")
//     }
//     return(
// <React.Fragment>
// <button onClick = {clk} >Press</button>
//     <h1>{props.name}</h1>
// </React.Fragment> 
// )
// };


class One extends React.Component{
    

    state = {
        name : "sohail"
    }

    O = () =>{
        this.setState({
            name : "memon"
        })
    }

    render(){
        return(
            <div><h1>{this.state.name}</h1>
                <button onClick = {this.O}>Press</button>
            </div>
        )
    }
}
export default One;