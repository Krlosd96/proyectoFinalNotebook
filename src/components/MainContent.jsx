import "../styles/MainContent.css";
import TransactionHistory from "./TransactionHistory.jsx";
import Overview from "./Overview.jsx";
import AddTransaction from "./AddTransaction.jsx";
import { formatCurrency } from "../utils/formatCurrency.js";

export default function MainContent({
  children,
  activeTab,
  onAddTransaction,
  activeUser,
  onDeleteTransaction,
}) {
  const transacciones = activeUser?.transactions ?? [];

  const saldo = () => {
    return transacciones.reduce((acc, tx) => {
      return tx.tipo === "ingreso"
        ? acc + Number(tx.monto)
        : acc - Number(tx.monto);
    }, 0);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 1:
        return <Overview transacciones={transacciones} />;
      case 2:
        return (
          <TransactionHistory
            transacciones={transacciones}
            onDeleteTransaction={onDeleteTransaction}
          />
        );

      default:
        return <Overview transacciones={transacciones} />;
    }
  };

  return (
    <main className="main-content-area">
      {children}
      <div className="balance-card">
        <h2>
          Mi saldo:
          <span className={saldo() < 0 ? "negative-amount" : "balance-amount"}>
            {" "}
            {formatCurrency(saldo())}
          </span>
        </h2>
        <AddTransaction onAddTransaction={onAddTransaction} />
      </div>
      <div>{renderActiveTab()}</div>
    </main>
  );
}
