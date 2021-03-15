import React from 'react';
import { Button, Image, Modal } from 'react-bootstrap';

const DoctorDetails = ({show, handleClose, id}) => {
    return (
        <div>
            <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
         show={show} onHide={handleClose} className="w-100">
            <Modal.Header closeButton>
            <Modal.Title>
                {/* <Image style={{height : '400px', width : '100%'}} src={service.serviceImage} alt="im"/> */}
                    
                <h2>{id}</h2>
            </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {/* {service.serviceDetails} */}
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default DoctorDetails;