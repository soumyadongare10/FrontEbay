import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import image7 from '../Images/image7.jpg'
import image8 from '../Images/image8.jpg'
import Header from '../Header/Header';

export default function Dashboard() {

    return (

        <div>
            <Header/>
        
        <div className="bg">
            
            
            <div className="card " /*style={{maxWidth: '1135px'}}*/>
                <div className="row g-0 ">
                    <div className="col-md-9">
                    <Carousel>
                    <Carousel.Item>
                        <img src={image1} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image2} alt="image2" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image3} alt="image3" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image4} alt="image4" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image5} alt="image5" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image6} alt="image6" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image7} alt="image7" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image8} alt="image8" height="550px" width="100%" />
                    </Carousel.Item>
                </Carousel>
                    </div>
                    <div  className="halfbg col-md-3">
                        <div className="card-body">
                            <p className="card-title"><em> <b>Brillio Technologies Pvt Ltd.</b></em></p>
                            <p className="card-text"><b> Join Now...</b></p>
                            <p className="card-text"></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
