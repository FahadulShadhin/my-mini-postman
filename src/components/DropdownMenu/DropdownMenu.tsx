import { useRef, useEffect } from 'react';
import DownArrow from '../icons/DownArrow';
import type { DropdownOptions, DrondownProps } from './DropdownMenu.types';

const DropdownMenu = ({
  isOpen,
  setIsOpen,
  selectedOption,
  buttonTextColor,
  onToggle,
  onOptionClick,
}: DrondownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions: DropdownOptions[] = [
    ['GET', 'text-green-500'],
    ['POST', 'text-yellow-500'],
    ['PUT', 'text-blue-500'],
    ['PATCH', 'text-purple-500'],
    ['DELETE', 'text-red-500'],
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

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className={`bg-slate-800 px-3 py-2 border border-slate-600 border-r-0 font-bold
                    ${buttonTextColor ? `${buttonTextColor}` : `text-green-500`} flex`}
        onClick={onToggle}
      >
        {selectedOption ? selectedOption : 'GET'}
        <div className="pl-8 pr-2 mt-2">
          <DownArrow fill={'#ffffff'} height={'10px'} width={'10px'} />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-slate-800 border border-slate-600 rounded w-36 z-[9999]">
          {dropdownOptions.map(([option, textColor], index) => (
            <li
              key={`${option}-${index}`}
              className={`hover:bg-slate-700 px-3 py-2 font-bold cursor-pointer ${textColor}`}
              onClick={() => onOptionClick(option, textColor)}
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
