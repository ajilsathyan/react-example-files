import React from 'react';
import "./Contact"


function Contact({name , email , message , btn }) {
    var N = name.toUpperCase();
    var st = {padding:20,color:"red",fontSize:25}// inline style method
  // alert(typeof name);
    return (
        <div className="contact" style={ st }>
            <label>{N}</label><br/>
            <input type="text" placeholder={email}/><br/>
             <label>{message}</label><br/>
            <textarea></textarea><br/>
            <button style={btn}>Submit</button>
            
        </div>
    )
}

export default Contact
