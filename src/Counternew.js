import React, {Component} from "react";

class Counternew extends Component{


   constructor(props){
       super(props);
       this.state = {
           counter : 0,
           x:9,
           y:10
       };

   } 
increment(){
   setTimeout(()=>{

    this.setState( (prev,props) =>({counter:prev.counter+1}) );
   },1000)

   }

   render(){
     
    this.increment();

      return(
        <div>
          <h3>{this.state.counter}</h3>
        </div>
      );
   };


}

export default Counternew;
