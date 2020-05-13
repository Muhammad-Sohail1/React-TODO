import React from "react";

export class Nine extends React.Component{
        constructor(props){
            super(props)

            this.state = {
    
                Name : "cc",
                roll : this.props.roll
            }
        }
            // changeState(){
            //     this.setState({
            //         Name : "bb",
            //         roll : "121"
            //     })
            // }

    render(){
        return(
            <div>
                <h1>{this.state.Name} Your Roll{this.state.roll}</h1>
                {/* <button onClick= {() => this.changeState()}>press</button> */}
            </div>
        )
    }
}

// export default Nine;