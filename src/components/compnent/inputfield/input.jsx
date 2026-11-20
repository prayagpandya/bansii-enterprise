import React from "react";

export const Input = ({ inputName, inputType, placeholder, className }) => {
  return (
    <div className={className}>
      <span className="flex flex-col relative">
        <input
          className="peer px-3 py-2 border border-gray-300 rounded-md text-lg focus:border-blue-500 focus:outline-none"
          id={inputName}
          name={inputName}
          type={inputType}
          placeholder={placeholder}
        />
        <label
          htmlFor={inputName}
          className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-focus:ease-linear peer-focus:duration-300 peer-focus:text-base peer-focus:-top-6 peer-focus:text-blue-800 peer-focus:uppercase peer-focus:left-0 peer-focus:font-bold"
        >
          {inputName}
        </label>
      </span>
    </div>
  );
};

export const Select = ({ name, options, value, defaultValue, onChange }) => {
  return (
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="w-full py-2 border border-gray-300 lg:px-9 xl:-mr-4 rounded-md text-lg text-gray-600 focus:border-blue-500 focus:outline-none lg:w-auto xl:w-full"
    >
      {defaultValue && <option value="">{defaultValue}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
