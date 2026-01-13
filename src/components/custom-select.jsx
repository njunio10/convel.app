import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-left outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all flex items-center justify-between ${
          !value ? "text-[#003000]/50" : "text-[#003000]"
        }`}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 text-[#67d65d] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-50 mt-1 w-full rounded-[12px] bg-white border border-[#003000]/20 shadow-lg max-h-[200px] overflow-y-auto"
          onWheel={(e) => e.stopPropagation()}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-4 py-2.5 text-left text-[14px] transition-all first:rounded-t-[12px] last:rounded-b-[12px] ${
                value === option.value
                  ? "bg-gradient-to-r from-[#c3f5bf] to-[#67d65d] text-[#003000] font-semibold"
                  : "text-[#003000] hover:bg-[#c3f5bf]/30"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
