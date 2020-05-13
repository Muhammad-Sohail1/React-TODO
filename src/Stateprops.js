import React from "react";
import Child from "./child";

class StatePro extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name : props.name,
            todo : []
        }
        // this.Click = this.Click.bind(this)
    }

        Click = (e) =>{
            e.preventDefault();

            let todo = this.state.todo
            let input = this.state.name
            todo.push(input)
            
            this.setState({
                    todo : todo,
                    name: ""
            })
        }

        changeHandler = (event) =>{
            // console.log(event.target.value, "changehandlger")
            this.setState({
                    name: event.target.value
            });
        };

        render(){
            // console.log(this.props, "props");
            // console.log(this.state, "state");
            return(
                <React.Fragment>
                    
                    <form onSubmit={this.Click}>
                    <input type = "text" placeholder="memon" value ={this.state.name} onChange={this.changeHandler} /> 
                    <button>Press</button>
                    </form>
                    <br />
                    {/* <h1>{this.state.name}</h1> */}
                    <br />
                    {/* <li className = "color">{this.state.todo}</li> */}
                        
                    <Child value={this.state.todo } />
                </React.Fragment>
            )
        }
} 

export default StatePro;