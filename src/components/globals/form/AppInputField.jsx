const AppInputField = ({
  type = "text",
  placeholder,
  label,
  name,
  error,
  onChange,
}) => {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        id={name}
        type={type}
        placeholder={placeholder}
        className="primary-input w-full py-[12px] px-2"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default AppInputField;
