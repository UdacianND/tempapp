import React from "react";
import AuthService from "../service/AuthService";
import * as RS from '../constants/ResponseStatus'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Register() {

    const [user, setUser] = React.useState({
        phoneNumber: '+998',
        password: ''
    });
    localStorage.setItem("temp","temp")

    const [msg, setMsg] = React.useState('')
    const [isRegistered, setRegistered] = React.useState(false)
    if(isRegistered){
        return (<Navigate to='/confirm'  />)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setUser(user => ({
            ...user,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        AuthService.register(user).then(
            response => {
                if(response.status === RS.SUCCESS){
                    setMsg('Ok')
                    setRegistered(true)
                }               
            },
            error => {
                const statusCode = error.response.status
                if (statusCode === RS.PHONE_NUMBER_EXISTS)
                    setMsg('Raqam oldindan mavjud')
                else
                    setMsg('Error')
            }
        );
    }

    return (
        <div className='container'>
            <div className="col-md-12 card">
                <form className='form' onSubmit={handleSubmit}>
                    <h5  className="mb-2 form-header">Ro'yhatdan o'tish</h5>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='phoneNumber'
                            value={user.phoneNumber}
                            name='phoneNumber'
                            onChange={handleChange}
                            placeholder='Tel: +998914443359'
                            pattern="[+][998][0-9]{11}"
                        />
                    </div>

                    <div className='form-group mb-4'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            value={user.password}
                            name='password'
                            onChange={handleChange}
                            placeholder='Parol'
                            required="required"
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <button type='submit' className='btn btn-primary col-md-12'>
                            Yuborish
                        </button>
                    </div>
                    <div className='form-group'>
                        {msg && <h6 style={{color:"red"}}>{msg}</h6>}
                    </div>      
                    <div className='form-group'>
                       <Link to="/login">Kirish</Link>
                    </div>     
                </form>
            </div>
        </div>)
}