
export default function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <h2>{value}</h2>
      <p>{title}</p>
      <small>Demo statistic</small>
    </div>
  );
}
