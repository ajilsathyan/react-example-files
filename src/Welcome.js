import React,{ Component } from 'react';
//{ Component } from react Class Component

// we can use all the Class components from react
// which is a type of inheritance
class Welcome extends Component{

    constructor(props){//Which is a Constructor
        super(props);//calling the Parent =>(Component)
    }
   // render function which returns the values
    render(){
     
         //this mainly used for Class function
        //this.props.title=> Calling props parameter from Parent App
        return(
            <div>
                
                <h1>{this.props.title}</h1>
            </div>
        );
    }


}
export default Welcome;