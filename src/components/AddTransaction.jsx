import {useState} from 'react';
import '../styles/AddTransaction.css'

export default function AddTransaction({onAddTransaction}) {
    const [monto, setMonto] = useState('');
    const [tipo, setTipo] = useState('');
    const [concepto, setConcepto] = useState('');
    const [categoria, setCategoria] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaTransaccion = {
            monto: parseFloat(monto),
            tipo,
            concepto,
            categoria,
            fecha: new Date().toLocaleDateString(),
            id: Date.now()
        };
        onAddTransaction(nuevaTransaccion);
        setMonto('');
        setTipo('');
        setConcepto('');
        setCategoria('');
    };

    return(
        <div className="add-transaction-form">
            <h2>Agregar Transacción</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Monto:</label>
                <input
                    name="monto"
                    min="1"
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />
            </div>
            <div>
                <label>Tipo:</label>
                <select 
                required 
                value={tipo} 
                onChange={(e) => setTipo(e.target.value)}
                name="tipo">
                    <option value="">Seleccionar tipo</option>
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
                    name="concepto"
                />
            </div>
            <div>
                <label>Categoría:</label>
                <select 
                value={categoria} 
                onChange={(e) => setCategoria(e.target.value)} 
                name="categoria">

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