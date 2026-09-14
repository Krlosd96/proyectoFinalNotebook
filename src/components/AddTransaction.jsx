import {useState} from 'react';
import '../styles/AddTransaction.css'

export default function AddTransaction({onAddTransaction}) {
    const [monto, setMonto] = useState('');
    const [tipo, setTipo] = useState('ingreso');
    const [concepto, setConcepto] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction({ monto: parseFloat(monto), tipo, concepto, categoria });
        setMonto('');
        setTipo('ingreso');
        setConcepto('');
        setCategoria('');
    };

    return(
        <div className="add-transaction">
            <h2>Agregar Transacción</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Monto:</label>
                <input
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />
            </div>
            <div>
                <label>Tipo:</label>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="ingreso">Ingreso</option>
                    <option value="egreso">Egreso</option>
                </select>
            </div>
            <div>
                <label>Concepto:</label>
                <input
                    type="text"
                    value={concepto}
                    onChange={(e) => setConcepto(e.target.value)}
                />
            </div>
            <div>
                <label>Categoría:</label>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Seleccionar categoría</option>
                    <option value="alimentacion">Alimentación</option>
                    <option value="transporte">Transporte</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="salud">Salud</option>
                    <option value="hogar">Hogar</option>
                    <option value="ahorro">Ahorro</option>
                </select>
            </div>
            <button type="submit">Agregar</button>
        </form>
    </div>
)}