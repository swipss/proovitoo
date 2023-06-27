interface CheckboxProps {
  onChange?: () => void;
  isChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, isChecked }) => {
  const toggleCheckbox = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <label className="flex items-center ml-1 cursor-pointer">
      <div
        className={`${
          isChecked && "bg-green-800 !border-green-800"
        } flex items-center justify-center w-6 h-6 border border-neutral-300 rounded`}
        onClick={toggleCheckbox}
      >
        {isChecked && (
          <svg
            viewBox="0 0 16 16"
            className="w-4 h-4 text-white stroke-white"
            stroke="currentColor"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="check-regular 1">
              <path
                id="Vector"
                d="M15.0031 4.00313L6.50313 12.5031C6.38438 12.6781 6.19376 12.75 6.00001 12.75C5.80626 12.75 5.61626 12.6767 5.4697 12.5303L0.969696 8.03028C0.676727 7.73731 0.676727 7.26278 0.969696 6.96966C1.26266 6.67653 1.7372 6.67669 2.03032 6.96966L6.00001 10.9406L13.9688 2.97188C14.2617 2.67891 14.7363 2.67891 15.0294 2.97188C15.3225 3.26485 15.3219 3.7375 15.0031 4.00313Z"
              />
            </g>
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
