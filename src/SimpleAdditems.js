import React ,{Component} from 'react';

class SimpleAdditems extends Component{
    

    constructor(props){
        super(props);
        this.state={

            items: ["item: "],
            textcontent: ""
        };
    }

textchange=(e)=>{
  this.setState({ textcontent:e.target.value })
}

addcontent=(e)=>{
   
    let currentText = this.state.textcontent;
    let currentItems= this.state.items;
    currentItems.push(currentText);
    this.setState({items:currentItems});
}

removeItems=(e)=>{
    if( !window.confirm("Are you sure you want to delete this item.?")){
        return;
    }

  let currentItems = this.state.items;
  currentItems.splice(e,1);
  this.setState({items:currentItems});
}
render(){
    return(
        <div>
            <h3>Type Your Items here</h3>
          <input onChange={this.textchange} type="text" placeholder="So pumped"/>
          <button onClick={this.addcontent}><strong>+</strong></button><br/>
          
          <ul>
              {this.state.items.map((item,key)=>{
                  return(
                      <li>
                          {item}<button onClick={()=>{this.removeItems(key)}  }>Delete</button>
                      </li>
                  )
              })}
          </ul>
          
        </div>
    );
}

}
export default SimpleAdditems;