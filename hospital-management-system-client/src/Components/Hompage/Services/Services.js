import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Services.css'
import { Carousel, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Services = () => {
    const [services, setServices] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      useEffect(() => {
         fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
      },[])
    
      console.log(services)


    // const businessService = [
    //     {
    //         serviceId: 1,
    //         serviceName: 'Emergency & Observation',
    //         availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '24 Hours',
    //         seat: 10,
    //         image:'/images/img1.png',
    //     },
    //     {
    //         serviceId: 2,
    //         serviceName: 'Dialysis Unit',
    //         availableOn:  ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '10:05 AM - 11:30 AM',
    //         image:'/images/img2.png',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 3,
    //         serviceName: 'ICU',
    //         availableOn: ['Sun','Mon', 'Tue', 'Wed', 'Thu'],
    //         availableTime: '05:00 PM - 06:30 PM',
    //         image:'/images/img2.jpg',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 4,
    //         serviceName: 'Indoor and Outdoor',
    //         availableOn: ['Mon', 'Tue', 'Wed', 'Thu'],
    //         availableTime: '05:00 PM - 06:30 PM',
    //         image:'/images/img4.png',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 5,
    //         serviceName: 'Dental Care',
    //         availableOn: ['Sun','Mon', 'Tue', 'Wed', 'Thu'],
    //         availableTime: '05:00 PM - 06:30 PM',
    //         image:'/images/img5.jpg',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 6,
    //         serviceName: 'Vaccination Center',
    //         availableOn: ['Sun','Mon', 'Tue', 'Wed', 'Thu'],
    //         availableTime: '05:00 PM - 06:30 PM',
    //         seat: 10,
    //         image:'/images/img6.jpg',
    //     },
    //     {
    //         serviceId: 7,
    //         serviceName: 'Laser skin Care',
    //         availableOn: ['Sun','Mon', 'Wed', 'Thu'],
    //         availableTime: '05:00 PM - 06:30 PM',
    //         image:'/images/img7.jpg',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 8,
    //         serviceName: 'Pharmacy',
    //         availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '24 Hours',
    //         seat: 10,
    //         image:'/images/img8.jpg',
    //     },
    //     {
    //         serviceId: 9,
    //         serviceName: 'Ambulance',
    //         availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '24 Hours',
    //         image:'/images/img9.png',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 10,
    //         serviceName: 'Consultation Unit',
    //         availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '24 Hours',
    //         image:'/images/img10.jpg',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 11,
    //         serviceName: 'Female Unit',
    //         availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '24 Hours',
    //         image:'/images/img11.jpg',
    //         seat: 10
    //     },
    //     {
    //         serviceId: 12,
    //         serviceName: 'HBO',
    //         availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    //         availableTime: '24 Hours',
    //         seat: 10,
    //         image:'/images/img12.jpg',
    //     }
    // ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <section className="d-flex align-items-center">
            <Container>
                <div className="text-center">
                    <h3  style={{ color: '#00594d', fontSize: '35px'}} className="headline mt-3 mb-3">Our Specialty Centers</h3>
                </div>
                <Slider {...settings} className="mt-5 bg-white mb-5" activeIndex={index} onSelect={handleSelect}>
                    {
                        services.map((service, idx )=> 
                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col md={6}>
                                        <Image style={{height : '400px', width : '100%'}} src={service.serviceImage} alt="im"/></Col>
                                    <Col md={6}>
                                        <h3 style={{ color : '#17B995'}} className="mt-4 text-left">{service.serviceName}</h3>
                                        <hr style={{width : '20%', marginLeft: '0px', backgroundColor : '#d1c398', height : '2px'}}/>
                                        <p className="mt-2 mr-2 text-secondary">{service.serviceDetails}</p>
                                    </Col>
                                </Row>

                            )
                    }
                </Slider>
            
            </Container>
        </section>
    );
};

export default Services;