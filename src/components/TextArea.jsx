export default function TextArea({ label, value, onChange, error, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea value={value} onChange={onChange} {...props} />
      {error && <small className="field-error">{error}</small>}
    </label>
  )
}
