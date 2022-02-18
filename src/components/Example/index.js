import React from "react";

// const isLogin = false;

export class Example extends React.Component {
    render() {
        return <div>
            {this.props.name ? <h1>Hello, {this.props.name}</h1> : <h1>Hello, guest!</h1>}
            {this.props.name && <h1>How are you?</h1>}
        </div>;
        // if(this.props.name) {
        //     return <div>Hello, {this.props.name}</div>
        // }
        // return <div>Hello, guest!</div>
    }
}




// import FirstComponent from "../FirstComponent/FirstComponent";
// import FunctionComponent from "../FunctionComponent";

// const isLogin = false; //true

// export const Example = () => {
//     return(
//         <div>{isLogin && <FirstComponent/> }</div>
//         // <div>{isLogin ? <FirstComponent/> : <FunctionComponent/>}</div>
//     )
// }