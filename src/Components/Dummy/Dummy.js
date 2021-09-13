import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import './Dummy.css';
import vd from '../Images/vd.mp4';
import { useState } from 'react';
import { useHistory } from 'react-router';
import HeaderPre from '../HeaderPre/HeaderPre';

export default function Dummy() {

    const [uid, setUid] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const handleLogin = () => {
        //Add the correct API 
        fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({uid, password }),
        
        })
        .then(res => res.json())
        .then(data=>console.log(data))
    }

    return (
    
       
            <div className="section">
             <video id="videobg" poster="post.png" autoPlay loop muted>
            <source src={vd} type="video/mp4" />
        </video> 
                  <div  className="content">
                   
                   <div  className="container">
                   <div className="login-card">
                  <h2 className="heading">Login</h2>
                   <img src="login.svg" width="30%" alt="login"/> 
                     <form className="login-form">
                    <div className="hov-trans">
                    <div className="form-member ">
                    <Input id="uid" type="text" onChange={(e) => setUid(e.target.value)} placeholder="User Id" /> <i class="fas fa-key"></i>
                    
                    </div>
                    <div className="form-member">
                    <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><i className="fas fa-unlock"></i> 
                        
                        
                
                    </div>
                    </div>
                    <Button id="btn-login" className="btn-login" /*style={{ backgroundColor: "  rgb(25, 117, 223)" }}*/ onClick={handleLogin}>Login</Button> 
                     
                </form>
                </div>
                  </div>
                  </div>
            </div>
    )
}
