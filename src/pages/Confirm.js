import React from "react"; 
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'
import * as Val from '../constants/Values'
import '../styles/Auth.css'

export default function Confirm() {
    const [smsCode, setSmsCode] = React.useState('');

    const navigate = useNavigate();

    const [msg, setMsg] = React.useState('')

    function handleChange(event) {
        const { value } = event.target
        setSmsCode(value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let isSuccess = await AuthService.confirm(smsCode);
        if(isSuccess)
            navigate(Page.HOME)
        else
            setMsg("Noto'g'ri ma'lumot")
    }

    return (
        <div className='container'>
            <div className="col-md-12 card">
                <form className='form confirm' onSubmit={handleSubmit}>
                    <h5  className="mb-2 form-header">Tasdiqlash kodi<br></br>
                    Код подтверждения</h5>
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
                            minLength={Val.CONFIRM_CODE_LENGTH}
                            maxLength={Val.CONFIRM_CODE_LENGTH}
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