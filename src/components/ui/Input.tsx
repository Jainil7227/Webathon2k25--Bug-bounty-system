import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-2.5 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-gray-400 ${
          error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};