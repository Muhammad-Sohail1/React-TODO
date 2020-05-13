import React from "react";

class Eight extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default Eight;