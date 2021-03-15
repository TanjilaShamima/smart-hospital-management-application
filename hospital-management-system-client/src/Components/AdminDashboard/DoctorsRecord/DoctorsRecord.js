import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import DoctorDetails from './DoctorDetails';


const DoctorsRecord = () => {
    const [doctors, setDoctors] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch('http://localhost:5000/doctors')
       .then(res => res.json())
       .then(data => setDoctors(data))
     },[])
    
    return (
        <>
        <Container>
            <h3>Doctors Record</h3>
            
            <Row className="rounded mt-3" style={{backgroundColor: 'lightblue'}}>
                <Col className="p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>All Doctors</h3>
                        <div>
                            <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic"  disabled>
                                <FontAwesomeIcon icon={faCalendar}/> | Week
                            </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                    </div>
                    <Table className="text-center mt-2" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Work Day</th>
                            <th>Department</th>
                            <th>Hospital Name</th>
                            <th>Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor => 
                            <tr key={doctor._id}>
                                {/* <td>{doctor._id}</td> */}
                                <td>{doctor.userName}</td>
                                <td>{doctor.userEmail}</td>
                                <td>sat-thur</td>
                                <td>{doctor.doctorCategory}</td>
                                {/* <td>{pt.name}</td> */}
                                <td>{doctor.hospitalName}</td>
                                <td>
                                    <Button onClick={()=>handleShow()}  variant="success">View</Button>
                                </td>
                                <td >
                                    <Button variant="info">Pending</Button>
                                    <Button className="ml-1" variant="warning"><FontAwesomeIcon icon={faPen} /></Button>
                                </td>
                                <DoctorDetails id={doctor._id} show={show} handleClose={handleClose}></DoctorDetails>
                                
                            </tr>)
                        }
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default DoctorsRecord;