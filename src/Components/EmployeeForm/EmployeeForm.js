import React,{ useState}  from 'react';
import './EmployeeForm.css';
import { useHistory } from 'react-router';
import vd from '../Images/vd.mp4';
import Header from '../Header/Header';
import post from '../Images/post.png';

export default function EmployeeForm() {

    const [eid, setEid] = useState('');
    const [ename, setEname] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [salary, setSalary] = useState('');

    let history = useHistory();


    const handleSubmit = () => {
        //Enter the correct api
        fetch('/EmployeeForm', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ eid,ename,address, date,phone,salary}),
        });
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.token) {
        //       localStorage.setItem('token', data.token);
        //       localStorage.setItem('email', email);
            
             history.push("/dashboard");
        //     } else {
            
        //     history.push('/login')
        //     }
        //  });
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
            <div className="form-card">
            
            <img src="data.svg" width="30%" alt="form"/> 
                <form className="emp-form">
                <div className="hov-trans">
                    <div className="form-member ">
                        <input id="eid" onChange={(e) => {setEid(e.target.value);}}  type="text" className="form-control" required placeholder="Employee Id" /><i class="fas fa-id-card-alt"></i>
                    </div>
                    <div className="form-member ">
                        <input id="ename" onChange={(e) => {setEname(e.target.value);}} type="text" className="form-control" placeholder="Employee Name" /><i class="fas fa-user"></i>
                    </div>
                    <div className="form-member ">
                        <textarea id="address" row="5" col="50" onChange={(e) => {setAddress(e.target.value);}} type="text" className="form-control" placeholder="Address" /><i class="fas fa-location-arrow"></i>
                    </div>
                    <div className="form-member ">
                        <input id="date" onChange={(e) => setDate(e.target.value)} type="Date" className=" text form-control" placeholder="Joining Date" /><i class="fas fa-calendar-alt"></i>
                    </div>
                    <div className="form-member ">
                        <input id="phone" onChange={(e) => {setPhone(e.target.value);}} type="number" className="form-control" placeholder="Contact Number" /><i class="fas fa-phone"></i>
                    </div>
                    <div className="form-member ">
                        <input id="salary" onChange={(e) => {setSalary(e.target.value);}} type="text" className="form-control" placeholder="Salary Per Day" /><i class="fas fa-rupee-sign"></i>
                    </div>
                    
                        <button type="submit" id="btn-submit" className="btn-submit" onClick={handleSubmit}>Submit</button>
                        </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
