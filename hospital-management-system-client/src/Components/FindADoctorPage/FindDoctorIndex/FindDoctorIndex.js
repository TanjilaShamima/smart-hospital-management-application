import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DoctorContainer from '../DoctorContainer/DoctorContainer';
import DoctorSearch from '../DoctorSearch/DoctorSearch';

const FindDoctorIndex = () => {
    const [selectedDept, setSelectedDept] = useState('');
    return (
        <Container>
            <Row className="my-3 mx-auto d-flex align-items-center justify-content-center">
                <Col md={5}>
                <Button className="py-2 px-5 font-weight-bold">Organ Search</Button>
                <Button className="ml-3 py-2 px-5 font-weight-bold">Static Search</Button>
                </Col>
            </Row>
            <DoctorSearch setSelectedDept={setSelectedDept} ></DoctorSearch>
            <DoctorContainer selectedDept={selectedDept}></DoctorContainer>
        </Container>
    );
};

export default FindDoctorIndex;