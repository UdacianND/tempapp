import React from "react"; 
import AuthService from "../service/AuthService";
import * as RS from '../constants/ResponseStatus'
import UserService from '../entityService/UserService'
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'

export default function Confirm() {
    let userId = UserService.getUser().id
    const [smsCode, setSmsCode] = React.useState('');

    const navigate = useNavigate();

    const [msg, setMsg] = React.useState('')

    function handleChange(event) {
        const { value } = event.target
        setSmsCode(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        AuthService.confirm(userId, smsCode).then(
            response => {
                if(response.status === RS.SUCCESS){
                    UserService.setUserAuthenticated()
                    navigate(Page.HOME)
                }               
            },
            error => {
                const statusCode = error.response.status
                if (statusCode === RS.BAD_REQUEST)
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
                    <h5  className="mb-2 form-header">Kodni tasdiqlash</h5>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='kod'
                            value={smsCode}
                            name='kod'
                            onChange={handleChange}
                            placeholder='Tasdiqlash kodi'
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