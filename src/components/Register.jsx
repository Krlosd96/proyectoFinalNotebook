import React, { useState } from 'react'
import '../styles/Register.css'

export default function Register({onRegister,}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [successRegister, setSuccessRegister] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden")
            return
        }
        onRegister({username, email, password })
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setSuccessRegister(true)
    }

    return(
        <form onSubmit={handleSubmit} className="register-form">
            <div className="title-register">
                <h1>User register</h1>
                
            </div>
            <div>
                <input
                className="register-input"
                required
                name="username" 
                type="text" 
                placeholder="Nombre de usuario" 
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input
                className="register-input"
                required
                name="email"  
                type="email" 
                placeholder="Correo electrónico" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input 
                className="register-input" 
                required
                name="password"
                type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input
                className="register-input"
                required
                name="confirmPassword"
                type="password" 
                placeholder="Confirmar contraseña" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit" className="register-button">Registrarse</button>
            {successRegister && <p className="success-message">Register has been successful! You can now log in</p>
            }
        </form>
    )
}
