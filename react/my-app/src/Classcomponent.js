import React from "react";

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {color: "danger"};

}

render(){
    return <h2 className="bg-danger">Iam a {this.state.color} color!</h2>;
    
}
}

export default Navbar;