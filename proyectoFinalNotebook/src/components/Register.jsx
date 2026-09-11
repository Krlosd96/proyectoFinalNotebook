import React, { useState } from 'react'

export default function Register({onRegister}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden")
            return
        }
        onRegister({username, email, password })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input
                name="username" 
                type="text" 
                placeholder="Nombre de usuario" 
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input
                name="email"  
                type="email" 
                placeholder="Correo electrónico" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input  
                name="password"
                type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input
                name="confirmPassword"
                type="password" 
                placeholder="Confirmar contraseña" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Registrarse</button>
        </form>
    )
}
