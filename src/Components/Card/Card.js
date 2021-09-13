import React from 'react';
import './Card.css';

export default function Card (props) {
    return (
      
      <div className="col-md-3" id="backbg">
            <div id="card1" className="card mb-2" >

          <div className="card-body" id="content">
        
        <div className="flip-card">
           <div className="flip-card-inner">
            <div className="flip-card-front">
            <img id="avatar" src="attend.svg" width="30%" alt="Avatar" />
            <p>Name:</p>
            <p>{props.ename}</p>
            
             </div>
            <div className="flip-card-back">
            <p className=""></p>
            {/* <p className="card_name">{props.country}</p> */}
            <p>EId : {props.eid}</p>
            
            <p>Start Date: {props.date}</p>
            
            <p>Salary per day: {props.salary}</p>
            
    </div>
  </div>
</div> 
    </div>
    </div> 
    
      </div>
      
      
      

       
      
        
    
        
    )
}
