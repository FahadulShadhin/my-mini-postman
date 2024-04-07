import { useState, useRef, useEffect } from 'react';
import DownArrow from './icons/DownArrow';

type DropdownOption = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type DropdownOptionColor = 'green' | 'yellow' | 'blue' | 'purple' | 'red';
type DropdownOptions = [DropdownOption, DropdownOptionColor];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | DropdownOption>(
    null
  );
  const [buttonColor, setButtonColor] = useState<null | DropdownOptionColor>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions: DropdownOptions[] = [
    ['GET', 'green'],
    ['POST', 'yellow'],
    ['PUT', 'blue'],
    ['PATCH', 'purple'],
    ['DELETE', 'red'],
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (
    option: DropdownOption,
    color: DropdownOptionColor
  ) => {
    setSelectedOption(option);
    setButtonColor(color);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className={`bg-slate-800 px-3 py-2 border border-slate-800 border-r-slate-600
                    ${buttonColor ? `text-${buttonColor}-500` : `text-green-500`} flex`}
        onClick={handleToggle}
      >
        {selectedOption ? selectedOption : 'GET'} 
        <div className='pl-8 pr-2 mt-2'>
          <DownArrow fill={'#ffffff'} height={'10px'} width={'10px'} />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-slate-800 border border-slate-600 rounded w-36 z-[9999]">
          {dropdownOptions.map(([option, color], index) => (
            <li
              key={`${option}-${index}-${color}`}
              className={`hover:bg-slate-700 px-3 py-2 cursor-pointer text-${color}-500`}
              onClick={() => handleOptionClick(option, color)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
