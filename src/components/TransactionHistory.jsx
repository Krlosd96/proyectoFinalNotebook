import "../styles/MainContent.css";
import { useState } from "react";
import { formatCurrency } from "../App";

export default function TransactionHistory({
  transacciones,
  onDeleteTransaction,
}) {
  const [pagina, setPagina] = useState(1);
  const [filter, setFilter] = useState("todos");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPagina(1); // Reset to first page when filter changes
  };

  const filteredTransacciones =
    filter === "todos"
      ? transacciones
      : transacciones.filter((tx) => tx.tipo === filter);

  const showPagina = () => {
    let limite = 10;
    let inicio = (pagina - 1) * limite;
    let fin = inicio + limite;
    return filteredTransacciones.slice(inicio, fin);
  };

  const handleDelete = (e) => {
    console.log("Transacción a eliminar:", e.target.value);
    if (
      window.confirm("¿Estás seguro de que deseas eliminar esta transacción?")
    ) {
      onDeleteTransaction(Number(e.target.value));
    }
  };

  return (
    <div className="balance-card">
      <div className="button-container">
        <button
          onClick={handleFilterChange}
          disabled={filter === "todos"}
          value="todos"
          className="button"
        >
          Todos
        </button>
        <button
          onClick={handleFilterChange}
          disabled={filter === "ingreso"}
          value="ingreso"
          className="button"
        >
          Ingresos
        </button>
        <button
          onClick={handleFilterChange}
          disabled={filter === "egreso"}
          value="egreso"
          className="button"
        >
          Egresos
        </button>
      </div>
      <h3 className="section-subtitle">Historial de Transacciones</h3>
      <ul>
        {transacciones && filteredTransacciones.length > 0 ? (
          showPagina().map((tx) => (
            <li key={tx.id} className="historial-item">
              {tx.fecha} - {tx.tipo === "ingreso" ? "+" : "-"}{" "}
              {formatCurrency(tx.monto)} - {tx.tipo.toUpperCase()}
              <button value={tx.id} onClick={handleDelete}>
                ❌
              </button>
            </li>
          ))
        ) : (
          <p>No hay transacciones para mostrar.</p>
        )}
      </ul>
      <div className="button-container">
        <button
          className="button"
          onClick={() => setPagina((prev) => Math.max(prev - 1, 1))}
          disabled={pagina === 1}
        >
          Anterior
        </button>
        <p>Página {pagina}</p>
        <button
          className="button"
          onClick={() => setPagina((prev) => prev + 1)}
          disabled={
            transacciones === null ||
            pagina * 10 >= filteredTransacciones.length
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
