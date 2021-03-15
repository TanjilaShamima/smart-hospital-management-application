import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { departments } from '../../../../FakeData/departments';
import { addLoggedinUser } from '../../../../Redux/Actions/PortalActions';
import { connect } from 'react-redux';

const DoctorRegistration = ({user, addLoggedinUser}) => {
    const [hospitalDepts, setHospitalDepts] = useState([]);
    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        const doctorInfo = new FormData();
        doctorInfo.append('userName', data.userName);
        doctorInfo.append('userEmail', data.userEmail);
        doctorInfo.append('hospitalName', data.hospitalName);
        doctorInfo.append('doctorCategory', data.doctorCategory);
        doctorInfo.append('doctorImage', data.doctorImage[0]);
        doctorInfo.append('userPassword', data.userPassword);
        doctorInfo.append('role', 'doctor');

        fetch('http://localhost:5000/addDoctor',{
            method: 'POST',
            body: doctorInfo
        })
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData);
            addLoggedinUser(returnedData)
            history.push('/doctorportal')
        })
        .catch(err => console.log(err));
    } 

    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);

    return (
        <div className="" style={{textAlign: 'center', height : '700px', backgroundImage : 'url("https://wallpaperaccess.com/full/619974.jpg")', backgroundPosition : 'center center', backgroundSize :'cover'}}>

            <Container className="">
     
            <form className="rounded shadow p-4 border float-right" style={{width: '450px', border : '1px solid #04020200', boxShadow : 'gray', marginTop : '80px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-light">Create a New Account</h2>

                <input className="form-control my-3 mt-4 p-3" type="text" name="userName" ref={register({ required: true,})} placeholder="Enter Full Name"/>           
                { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                {errors?.userEmail && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="text" name="hospitalName" ref={register({ required: true})} placeholder="Enter Hospital Name"/>           
                { errors?.hospitalName && errors?.hospitalName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <select
                    ref={register({ required: true})} 
                    name="doctorCategory"
                    defaultValue="Select one..."
                    className="form-control"
                    >
                        {
                            hospitalDepts.map(dept => <option key={dept.id} value={dept.deptName}>{dept.deptName}</option>)
                        }
                </select>
                {errors?.doctorCategory && <span className="text-danger">This field is required</span>}
                <br/>

                <input ref={register({ required: true})} name="doctorImage" className="form-control bg-transparent" placeholder="Upload Your Image" type="file" />
                {errors?.doctorImage && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3" type="password" name="userPassword" ref={register({ required: true })} placeholder="Password"/>           
                {errors?.userPassword && <span className="text-danger">This field is required</span>}

                <input type="submit" value="Sign Up" className="my-3 w-100 bg-primary py-1 rounded"/>
            </form>
            </Container>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        state : state.state
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}



export default connect(mapStateToProps,mapDispatchToProps)(DoctorRegistration);