import React from "react";

const FormInput = ({ label, type = "text", placeholder }) => {
  return (
    <div className="space-y-1">
      <label className="block text-gray-600 font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg w-full"
      />
    </div>
  );
};

export default FormInput;
