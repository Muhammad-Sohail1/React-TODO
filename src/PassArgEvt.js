import React from "react";

class Pass extends React.Component{

    state = {
        name : "sohail",
        id : "1"
    }

    handleclick = (id,name,r) => {
        console.log(id)
        console.log(name);
        console.log(r)
    }

    handlearg = () => {
        this.handleclick(this.state.id,this.state.name,"ee") 
    }

    // O(){
    //     this.setState({ 2
    //         name : "memon"
    //     })
    // }

    render(){

        return(
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <button onClick = {this.handlearg} >Press</button> 
                {/* <button onClick = {() => this.O()} >Press</button>  2 */}
                {/* <button onClick = {() => this.handleclick(this.state.id,this.state.name) 3}>Press</button> */}
                {/* <button onClick = {this.handleclick.bind(this, this.state.id,this.state.name)}>Press</button> */}
            </React.Fragment>
        )
        
    }
}

export default Pass;