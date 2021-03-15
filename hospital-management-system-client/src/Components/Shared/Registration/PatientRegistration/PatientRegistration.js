import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

const PatientRegistration = () => {

    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        data.role = 'patient';
        fetch('http://localhost:5000/addPatient',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData);
            history.push('/patientportal')
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="log-in align-items-center" style={{textAlign: 'center', height : '700px'}}>
            <div className="d-flex align-items-center justify-content-center text-center">
     
                <form style={{width: '450px', border : '1px solid #04020200', boxShadow : 'gray', marginTop : '90px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)} className="rounded shadow p-4 border">
                    <h2 className="text-light">Create a New Account</h2>

                    <input className="form-control my-3 p-3 mt-4" type="text" name="userName" ref={register({ required: true,})} placeholder="Enter Full Name"/>           
                    { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                    <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                    {errors?.userEmail && <span className="text-danger">This field is required</span>}

                    <input className="form-control my-3 p-3" type="text" name="userGender" ref={register({ required: true })} placeholder="Gender"/>           
                    {errors?.userGender && <span className="text-danger">This field is required</span>}

                    <input className="form-control my-3 p-3" type="number" name="mobileNumber" ref={register({ required: true })} placeholder="Mobile Number"/>           
                    {errors?.mobileNumber && <span className="text-danger">This field is required</span>}

                    <input className="form-control my-3 p-3" type="password" name="userPassword" ref={register({ required: true })} placeholder="Password"/>           
                    {errors?.userPassword && <span className="text-danger">This field is required</span>}

                    <input type="submit" value="Sign Up" className="my-3 w-100 bg-primary py-1 rounded"/>
                </form>
            </div>  
        </div>
    );
};

export default PatientRegistration;