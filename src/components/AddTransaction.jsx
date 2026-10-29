import { useState } from "react";
import "../styles/AddTransaction.css";

export default function AddTransaction({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    monto: "",
    tipo: "",
    concepto: "",
    categoria: "",
    fecha: new Date().toISOString().split("T")[0], // Formato YYYY-MM-DD
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "monto" && value >= 0) {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) }));
    } else if (name !== "monto") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      parseFloat(formData.monto) <= 0 ||
      !formData.monto ||
      !formData.tipo ||
      !formData.concepto ||
      !formData.categoria
    ) {
      setError(true);
      return;
    }

    onAddTransaction(formData);
    setFormData({
      id: Date.now(),
      monto: "",
      tipo: "",
      concepto: "",
      categoria: "",
      fecha: new Date().toISOString().split("T")[0],
    });
    setError(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-transaction-form">
        <h2>Agregar Transacción</h2>
        <div>
          <label>Monto:</label>
          <input
            placeholder="0.00"
            className={
              error && (parseFloat(formData.monto) <= 0 || !formData.monto)
                ? "input-style input-error"
                : "input-style"
            }
            name="monto"
            type="number"
            value={formData.monto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <select
            className={
              error && formData.tipo === ""
                ? "input-style input-error"
                : "input-style"
            }
            required
            value={formData.tipo}
            onChange={handleChange}
            name="tipo"
          >
            <option value="">Seleccionar tipo</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
        </div>
        <div>
          <label>Concepto:</label>
          <input
            placeholder="Ej: Salario, Comida, Transporte"
            className={
              error && formData.concepto === ""
                ? "input-style input-error"
                : "input-style"
            }
            type="text"
            value={formData.concepto}
            onChange={handleChange}
            name="concepto"
          />
        </div>
        <div>
          <label>Categoría:</label>
          <select
            className={
              error && formData.categoria === ""
                ? "input-style input-error"
                : "input-style"
            }
            value={formData.categoria}
            onChange={handleChange}
            name="categoria"
          >
            <option value="">Seleccionar categoría</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
            <option value="ahorro">Ahorro</option>
          </select>
        </div>
        <button className="button-add" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}
