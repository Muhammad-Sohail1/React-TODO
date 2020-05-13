import React from "react";

export class Childs extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome Prop{this.props.children}</h1>
            </div>
        )
    }
}

// export default Childs;