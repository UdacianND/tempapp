import React from "react"; 
import AuthService from "../service/AuthService";
import * as RS from '../constants/ResponseStatus'
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'
import { useTelegram } from "../hooks/useTelegram";

export default function Confirm() {
    const {user} = useTelegram()
    const [smsCode, setSmsCode] = React.useState('');

    const navigate = useNavigate();

    const [msg, setMsg] = React.useState('')

    function handleChange(event) {
        const { value } = event.target
        setSmsCode(value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let status = await AuthService.confirm(user.id, smsCode);
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
                            minlength="5" 
                            maxlength="5"
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