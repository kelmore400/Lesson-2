import React from "react";

const greetingText = React.createElement('h1', { className: "my_h1" }, "Hello");

class FirstComponent extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        // console.log(this.props);
        return(
            <div>
                <h1>Hello world</h1>

                {/* <h1>Hi!</h1>
                {greetingText}
                {this.props.name}
                {this.props.children}
                <hr></hr> */}
            </div>
        )
    }
}

export default FirstComponent;