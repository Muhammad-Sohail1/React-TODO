import React from "react";

class Pro extends React.Component{
    constructor(){
        super()

        this.state = {
            age: "90",
            cost: "99999"
        }

    } 
    changeState(){
        this.setState({
            age: "63",
            cost: "6363636363636"
        })
    }
    render(){
        return (
            <div>
                <h1>First Class Name {this.state.age} {this.state.cost}</h1>
        <button onClick={() => this.changeState()}>click</button>
            </div>
        )
    }
}

export default Pro;