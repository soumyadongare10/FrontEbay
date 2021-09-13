import React, { useState}from 'react';
import vd from '../Images/vd.mp4';
import { Link } from "react-router-dom";
 import Card from '../Card/Card'
 import  './Salary.css';
 import Header from '../Header/Header';
 import post from '../Images/post.png';


export default function Salary() {
    const [inputEmp, setInputEmp] = useState([]);
    fetch(`/salary`)
    .then((res) => res.json())
         .then(data => {
            setInputEmp(data);
            console.log(data);
 
        });
    return (
         <div>
             <Header/> 
            
             <div className="section"> 
                 {/* <div className="container" id="favcs">                  */}
            


        
                    <div className="row mb-2">
        
            {

inputEmp.map(item =>
    <Card
     
    ename={item.ename}
    eid={item.eid}
    date={item.date}
    salary={item.salary}
     
    />
    )}
            </div>
       <div className="video-container">
            {/* <video id="videobg" poster="post.png" autoPlay loop muted>
                    <source src={vd} type="video/mp4" />
                </video>     */}
                <img src={post} alt="globe"/>
             </div>
            
            
             </div>
             </div>
            
            
            
           
        )
    }