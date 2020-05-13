import React from "react";

class Prop extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome Prop {this.props.Name}</h1>
                <h2>Come Again Prop{this.props.Roll}</h2>
            </div>
        )
    }
}

export default Prop;