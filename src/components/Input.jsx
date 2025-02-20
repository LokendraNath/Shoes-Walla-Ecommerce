const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        className="sidebar-label-container-input"
        type="radio"
        name={name}
        onChange={handleChange}
        value={value}
      />
      <span
        className="checkmark sidebar-label-container-span"
        style={{ backgroundColor: color }}
      ></span>
      <span>{title}</span>
    </label>
  );
};

export default Input;
