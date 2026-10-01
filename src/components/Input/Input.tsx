import React, { InputHTMLAttributes, useId } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  id,
  disabled,
  className = '',
  ...props
}) => {
  // Автоматична генерація унікального ID для з'єднання <label> та <input> (важливо для a11y)
  const generatedId = useId();
  const inputId = id || generatedId;
  const isInvalid = Boolean(errorMessage);

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-md text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-gray-400 pointer-events-none">
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={isInvalid}
          aria-describedby={
            isInvalid ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          className={`
            w-full rounded-lg border text-sm transition-colors duration-200 py-2
            focus:outline-none focus:ring-2 focus:ring-offset-1
            disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
            ${leftIcon ? 'pl-10' : 'pl-3'}
            ${rightIcon ? 'pr-10' : 'pr-3'}
            ${
              isInvalid
                ? 'border-red-500 focus:border-red-500 focus:ring-red-200 text-red-900 placeholder-red-300'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 text-gray-900 dark:border-gray-600 dark:text-white'
            }
            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {/* Повідомлення про помилку чи підказка */}
      {errorMessage ? (
        <p id={`${inputId}-error`} className="text-xs text-red-600 font-medium">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-helper`} className="text-xs text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};