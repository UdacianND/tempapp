import React from "react";
import AuthService from "../service/AuthService";
import * as Val from '../Values'
import { Navigate } from "react-router-dom";
import L from "./L"

export default function Register() {

    const [user, setUser] = React.useState({
        phoneNumber: '',
        password: ''
    });

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
        console.log(user)
        AuthService.register(user).then(
            response => {
                if(response.status === Val.SUCCESS){
                    setMsg('Ok')
                    setRegistered(true)
                }               
            },
            error => {
                const statusCode = error.response.status
                if (statusCode === Val.PHONE_NUMBER_EXISTS)
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
                    <h5 style={{textAlign:'center'}} className="mb-2">Register</h5>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='phoneNumber'
                            value={user.phoneNumber}
                            name='phoneNumber'
                            onChange={handleChange}
                            placeholder='Telefon raqam'
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
                            <L w = "register"/>
                        </button>
                    </div>
                    <div className='form-group'>
                        {msg && <h6 style={{color:"red"}}>{msg}</h6>}
                    </div>          
                </form>
            </div>
        </div>)
}