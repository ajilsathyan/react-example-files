import React, {Component} from 'react';


class Map extends Component{

constructor(props){
    super(props)
    this.state ={
        items : [ "Mango", "Apple", "Orange", "Grapes", "Peach","StrawBerry","Mangostin"],
        users : [
            {name:"Ajil Sathyan",age: 21,place:"Panniyode"},
            {name:"Ashik Sathyan",age:20,place:"Panniyode"},
            {name:"Sathyan",age:47,place:"Panniyode"},
            {name:"Geetha",age:40,place:"Panniyode"}
        ]
    }
}

render(){


   
    return(
        <div>
           <ul>
              {this.state.items.map((itm,key)=><li key={key}>{itm}</li>)}
           </ul>
           <table>
               <tr>
                   <td>Name</td>
                   <td>Age</td>
                   <td>Place</td><br/>

               </tr>
               {
                       this.state.users.map((items,key)=>{
                           return(
                               <tr>
                                   <td>{items.name}</td>
                                   <td>{items.age}</td>
                                   <td>{items.place}</td>
                               </tr>
                           );
                       })
                   }
           </table>
        </div>
    );
}


}

export default Map;
