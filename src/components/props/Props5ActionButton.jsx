export function Props5ActionButton({ label, payload, onAction }) {
  return (
    <button className="action-btn" onClick={() => onAction(payload)}>
      {label}
    </button>
  );
}
