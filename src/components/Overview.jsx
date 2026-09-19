import StatCard from "./StatCard";
import { useState } from "react";

export default function Overview({ transacciones, user }) {
  console.log("Transacciones en Overview:", transacciones);
  const months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const [mesSeleccionado, setMesSeleccionado] = useState(months[new Date().getMonth()]);
  const agruparPorMes = (transacciones) => {
    return transacciones.reduce((acc, tx) => {
      if (!tx.fecha) return acc; // Skip transactions without a date
      const mes = months[parseInt(tx.fecha.split("/")[1]) - 1]; // Assuming the date format is DD/MM/YYYY
      acc[mes] = acc[mes] || { ingresos: 0, egresos: 0 };
      if (tx.tipo === "ingreso") {
        acc[mes].ingresos += tx.monto;
      } else {
        acc[mes].egresos += tx.monto;
      }
      return acc;
    }, {});
  };

  const datosMensuales = agruparPorMes(transacciones);

  return (
    <div>
      <h1>Mes a mes</h1>
      <div>
        <label htmlFor="mes">Selecciona un mes: </label>
        <select id="mes" value={mesSeleccionado} onChange={(e) => setMesSeleccionado(e.target.value)}>
          {months.map((mes) => (
            <option key={mes} value={mes}>
              {mes}
            </option>
          ))}
        </select>
      </div>
      <div className="stat-card-container">
        <StatCard title="Ingresos" value={datosMensuales[mesSeleccionado]?.ingresos || 0} icon="➕" />
        <StatCard title="Egresos" value={datosMensuales[mesSeleccionado]?.egresos || 0} icon="➖" />
      </div>
    </div>
  );
}