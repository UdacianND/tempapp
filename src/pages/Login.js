import React from "react";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'
import '../styles/Auth.css'

export default function Login() {

    const navigate = useNavigate();

    const [loginUser, setLoginUser] = React.useState({
        phoneNumber: '+998',
    });

    const [msg, setMsg] = React.useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setLoginUser(user => ({
            ...user,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let isSuccess =await AuthService.login(loginUser)
        if(isSuccess)
            navigate(Page.CONFIRM)
        else                
            setMsg("Noto'g'ri ma'lumot-")
    }

    return (
        <div className='container'>
            <div className="col-md-12 card">
                <form className='form form-login' onSubmit={handleSubmit}>
                    <h5 className="mb-2 form-header">Telefon raqamingizni kiriting<br></br>
                    Введите свой номер телефона</h5>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='phoneNumber'
                            value={loginUser.phoneNumber}
                            name='phoneNumber'
                            onChange={handleChange}
                            placeholder='Tel: +998914443359'
                            pattern="[+][998][0-9]{11}"
                            required
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
                </form>
            </div>
        </div>)
}