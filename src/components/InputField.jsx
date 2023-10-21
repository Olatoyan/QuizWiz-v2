import { useState } from "react";
import Show from "/eye.svg";
import Hide from "/eye-slash.svg";

/**
 * Renders an input field with a label and optional password visibility toggle.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The event handler function for the `onChange` event of the input field.
 * @param {string} props.type - The type of the input field (e.g., "text", "password").
 * @returns {JSX.Element} - The rendered input field component.
 */
function InputField({ label, id, placeholder, value, onChange, type }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  /**
   * Toggles the password visibility.
   */
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[1.5rem] font-medium text-secondary"
      >
        {label}
      </label>
      <div className="mt-1 flex w-full px-6 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[1.3rem]">
        <input
          id={id}
          name="name"
          type={passwordVisible ? "text" : type}
          placeholder={placeholder}
          className="w-full border-0 focus:outline-0 focus:border-0"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className=" "
          >
            {passwordVisible ? (
              <img src={Hide} alt="Hide" />
            ) : (
              <img src={Show} alt="Show" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
