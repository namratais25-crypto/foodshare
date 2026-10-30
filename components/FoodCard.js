
import StatusBadge from "./StatusBadge";

export default function FoodCard({
  food,
  action,
  actionText,
}) {
  return (
    <div className="food-card">
      <div className="food-card-top">
        <h3>{food.name}</h3>
        <StatusBadge status={food.status} />
      </div>

      <p><b>Category:</b> {food.category}</p>
      <p><b>Quantity:</b> {food.quantity}</p>
      <p><b>Pickup Location:</b> {food.location}</p>
      <p>
        <b>Collection Deadline:</b>{" "}
        {new Date(food.deadline).toLocaleString()}
      </p>
      <p><b>Handling:</b> {food.handling}</p>

      {action && (
        <button
          className="primary-btn"
          onClick={action}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
