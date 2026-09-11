export default function Input({ label, value, onChange, error, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input value={value} onChange={onChange} {...props} />
      {error && <small className="field-error">{error}</small>}
    </label>
  )
}
