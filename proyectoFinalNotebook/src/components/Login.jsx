import {useState} from 'react'
import '../styles/MainContent.css'

export default function Login({onLogin}){
    const [inputName,setInputName]=useState("")
    const [inputPass,setInputPass]=useState("")
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputName.trim()==="" || inputPass.trim()===""){
            setError(true)
            return
        }
        onLogin(inputName, inputPass)
    }

    const handleWrite=(e)=>{
        setInputName(e.target.value)
    }
    const handlePass=(e)=>{
        setInputPass(e.target.value)
    }

    return(
        <form className="login-card" onSubmit={handleSubmit}>
            <div>
            <input 
            type="text"
            value={inputName}
            onChange={(e)=>{
                setInputName(e.target.value);
                if (error) setError(false)
            }}
            placeholder="Usuario"
            />
            </div>
            <div>
            <input 
            type="password"
            value={inputPass}
            onChange={(e)=>{
                setInputPass(e.target.value);
                if (error) setError(false)
            }}
            placeholder="Contraseña"
            />
            </div>
            <button className="button"
            type="submit">Login</button>
        </form>
    )
}