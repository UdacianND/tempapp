import React from "react";
import AuthService from "../service/AuthService";
import * as RS from '../constants/ResponseStatus'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'

export default function Login() {

    const navigate = useNavigate();

    const [loginUser, setLoginUser] = React.useState({
        phoneNumber: '+998',
        password: ''
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
        let status =await AuthService.login(loginUser)
        switch(status){
            case RS.SUCCESS:
                navigate(Page.HOME)
                break;
            case RS.BAD_CREDENTIALS:
                setMsg("Noto'g'ri ma'lumot")
                break;
            default :
                setMsg('Unknown error: ' + status)
        }
    }

    return (
        <div className='container'>
            <div className="col-md-12 card">
                <form className='form form-login' onSubmit={handleSubmit}>
                    <h5 className="mb-2 form-header">Kirish</h5>
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
                       Hisobingiz yo'qmi? <Link to={Page.REGISTER}>Ro'yhatdan o'ting!</Link>
                    </div>        
                </form>
            </div>
        </div>)
}