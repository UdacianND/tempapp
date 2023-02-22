import React from "react";
import AuthService from "../service/AuthService";
import * as RS from '../constants/ResponseStatus'
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'

export default function Register() {
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        phoneNumber: '+998',
        password: ''
    });

    const [msg, setMsg] = React.useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setUser(user => ({
            ...user,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault() 
        let status = await AuthService.register(user);
        switch(status){
            case RS.SUCCESS:
                navigate(Page.CONFIRM)
                break;
            case RS.PHONE_NUMBER_EXISTS:
                setMsg('Raqam oldindan mavjud')
                break;
            default :
                setMsg('Unknown error: ' + status)
        }
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
                       <Link to={Page.LOGIN}>Kirish</Link>
                    </div>     
                </form>
            </div>
        </div>)
}