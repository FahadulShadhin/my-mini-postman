export type DropdownOption = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type DropdownOptionColor =
  | 'text-green-500'
  | 'text-yellow-500'
  | 'text-blue-500'
  | 'text-purple-500'
  | 'text-red-500';

export type DropdownOptions = [DropdownOption, DropdownOptionColor];

export type DrondownProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedOption: DropdownOption | null;
  buttonTextColor: DropdownOptionColor | null;
  onToggle: () => void;
  onOptionClick: (option: DropdownOption, color: DropdownOptionColor) => void;
};
