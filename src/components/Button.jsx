export default function Button({ children, type = 'button', disabled = false, onClick, variant = 'primary' }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  )
}
