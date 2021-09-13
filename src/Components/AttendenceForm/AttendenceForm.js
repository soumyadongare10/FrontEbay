import React, { useState} from 'react';
import { useHistory } from 'react-router';

import './AttendenceForm.css';
import vd from '../Images/vd.mp4';
import post from '../Images/post.png';

import Header from '../Header/Header';
export default function AttendenceForm() {
    const [eid, setEid] = useState('');
    const [ename, setEname] = useState('');
    const [pname, setPname] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [hrs, setHrs] = useState('');

    let history = useHistory();
    const handleSubmit = () => {
        //Add the correct API 
        fetch('/Attendence', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({eid, ename,pname, location, date,hrs }),
        })
        // .then((res) => res.json())
        // .then((data) => {
        // localStorage.setItem('eid', eid);
        history.push("/dashboard");
    //     });

     }


    return (
        <div>
            <Header/>
        
        <div className="section">
             {/* <video id="videobg" poster="post.png" autoPlay loop muted>
            <source src={vd} type="video/mp4" />
        </video>  */}
        <img src={post} alt="globe"/>
        <div className="content">
            <div className="container">
            <div className="attend-card" >
            <img src="attend.svg" width="30%" alt="Mark Attendence"/> 

                <form className="attend-form">
                <div className="hov-trans">

                    <div className="form-member ">
                        <input id="eid"  onChange={(e) => setEid(e.target.value)}  type="text" className=" text form-control" placeholder="Employee Id" /><i class="fas fa-id-card-alt"></i>
                    </div>
                    <div className="form-member ">
                        <input id="ename" onChange={(e) => setEname(e.target.value)} type="text" className=" text form-control" placeholder="Employee Name" /><i class="fas fa-user"></i>
                    </div>
                    <div className="form-member ">
                        <input id="pname" onChange={(e) => setPname(e.target.value)} type="text" className=" text form-control" placeholder="Project Name" /><i class="far fa-address-book"></i>
                    </div>
                    <div className="form-member ">
                        <select id="location" onChange={(e) => setLocation(e.target.value)} type="text " data-bs-toggle="dropdown" className="text form-control" placeholder="Location" >
                                
                                <option value="sapphire">Sapphire</option>
                                <option value="hub">Hub</option>
                                <option value="pune">Pune</option>
                                <option value="hydrabad">Hydrabad</option>

                            
                            </select><i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="form-member ">
                        <input id="date" onChange={(e) => setDate(e.target.value)} type="Date" className=" text form-control" placeholder="Date" /><i class="fas fa-calendar-alt"></i>
                    </div>
                    </div>
                    <div className="hours">
                    <span className=""> Hours: </span>
                    <span>
                   
                       <div className="rd-option">
                        <input type="radio" id="hrs" align="left" onChange={(e) => setHrs(e.target.value)} name="hours" value="ft" /><lebel for="ft">FT
                        </lebel>
                       
                            <input type="radio" id="hrs" name="hours" onChange={(e) => setHrs(e.target.value)}value="ht" /><lebel for="ht">HT
                        </lebel>
                        
                            <input type="radio" id="hrs" name="hours" onChange={(e) => setHrs(e.target.value)} value="le" /><lebel for="le">Leave
                        </lebel>
                        </div>
                        </span>                 
                    </div>
                   
                        <button type="submit"  id="btn-submit" className=" btn-login " onClick={handleSubmit}>Submit</button>

                        
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
