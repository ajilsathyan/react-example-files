import React , { Component } from 'react';

class Hooks extends Component{


    constructor(){
        super();
        this.state ={
            counter : 0
        }
        console.log(" constructor triggered");

    }

    // eslint-disable-next-line react/no-typos
    componentWillmount =() => {
        console.log("inside Will mount triggered");
    }

    increment = () => {
        this.setState((prev,props)=>({
            
            counter:prev.counter+1}))
    }
    decrement = () => {
        this.setState((prev,props)=>({
            
            counter:prev.counter-1}))
    }


    render(){
           
        console.log(" inside a render method");
        return(

            <div>

                <h1>Hooks Life Cycle</h1>
                <button onClick={this.increment}><strong>+</strong></button>
                <button onClick={this.decrement}><strong>-</strong></button>
                <h3>{this.state.counter}</h3>
            </div>
        );
    }



    shouldComponentUpdate(){

        return true;
    
    }

    componentDidMount(){

        console.log("Inside component did mount triggered");
    }
    // eslint-disable-next-line no-dupe-class-members
    componentWillUnmount(){
        console.log();
    }

}
export default Hooks;