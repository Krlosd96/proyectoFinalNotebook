import "../styles/mainContent.css";
import { formatCurrency } from "../App";

export default function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-icon">{icon}</div>
      <div className="stat-card-content">
        <h3>{title}</h3>
        <p>{formatCurrency(value)}</p>
      </div>
    </div>
  );
}
