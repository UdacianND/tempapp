import React from "react";
import AuthService from "../service/AuthService";
import * as Val from '../Values'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const tg = window.Telegram.WebApp;

export default function Confirm() {
    let userId = tg.initDataUnsafe?.user?.id

    const [smsCode, setSmsCode] = React.useState(1);

    const [msg, setMsg] = React.useState('')
    const [isAutheticated, setAuthenticated] = React.useState(false)
    if(isAutheticated){
        return (<Navigate to='/'  />)
    }

    function handleChange(event) {
        const { value } = event.target
        setSmsCode(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        AuthService.confirm(userId, smsCode).then(
            response => {
                if(response.status === Val.SUCCESS){
                    localStorage.setItem('user', {'isAuthenticated':true})
                    setAuthenticated(true)
                }               
            },
            error => {
                const statusCode = error.response.status
                if (statusCode === Val.BAD_REQUEST)
                    setMsg("Noto'g'ri ma'lumot")
                else
                    setMsg('Unknown error: ' + statusCode)
            }
        );
    }

    return (
        <div className='container'>
            <div className="col-md-12 card">
                <form className='form' onSubmit={handleSubmit}>
                    <h5 style={{textAlign:'center'}} className="mb-2">Kirish</h5>
                    <div className='form-group mb-3'>
                        <input
                            type='phoneNumber'
                            className='form-control'
                            id='phoneNumber'
                            value={loginUser.phoneNumber}
                            name='phoneNumber'
                            onChange={handleChange}
                            placeholder='Telefon raqam'
                            required
                        />
                    </div>

                    <div className='form-group mb-4'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            value={loginUser.password}
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
                       Hisobingiz yo'qmi? <Link to="/register">Ro'yhatdan o'ting!</Link>
                    </div>        
                </form>
            </div>
        </div>)
}