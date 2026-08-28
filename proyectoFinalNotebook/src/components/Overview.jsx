import StatCard from "./StatCard";

export default function Overview({ transacciones, user }) {

  const months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const agruparPorMes = (transacciones) => {
    return transacciones.reduce((acc, tx) => {
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

const calcularIngresos = () => {
    return transacciones
      .filter((tx) => tx.tipo === "ingreso")
      .reduce((acc, tx) => acc + tx.monto, 0);
  }

const calcularEgresos = () => {
    return transacciones
      .filter((tx) => tx.tipo === "egreso")
      .reduce((acc, tx) => acc + tx.monto, 0);
  }

  return (
    <div>
      <h1>¡Hola de nuevo, {user}!</h1>
      <div>
        <StatCard title="Ingresos" value={calcularIngresos()} icon="➕" />
        <StatCard title="Egresos" value={calcularEgresos()} icon="➖" />
      </div>
    </div>
  );
}