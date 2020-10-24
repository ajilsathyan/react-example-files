import React ,{Component} from 'react';

class ClassEvent extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            enable:false,
            textinput:""
        }
    }
   
change=(e)=>{
    this.setState({textinput:e.target.value})
}

    checkbox=()=>{
        this.setState((prev,props)=>(
            {  enable: !prev.enable }
            
             ))
    }

    increment=()=>{
         this.setState( (prev,props)=>(
             {counter:prev.counter+1 }
             ));
         }

    decrement=()=>{
            this.setState( (prev,props)=>(
                {counter:prev.counter- 1 }
                ));
            }     
    render(){

        return(
            <div>
                <button onClick={ this.increment }>+</button>
                <button onClick={ this.decrement }>-</button>
                <p>You have clicked {this.state.counter} times</p>
                <p>{this.state.counter>=100?"You are exceeded the Max Value":""}</p>
                <p>{this.state.counter<0?"This values are less than Zero":""}</p>

                <label>Enable
                    <input type="checkbox" onClick={this.checkbox}/>
                </label>
                <p> It is {this.state.enable?"Enabled":"Disabled"}</p>
                <textarea type="text" onChange={this.change}></textarea>
                <textarea placeholder={this.state.textinput}></textarea>
                <h3>{this.state.textinput}</h3>
            </div>
        )
    }
}
export default ClassEvent;