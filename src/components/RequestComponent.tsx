import React, { useContext, useState } from 'react';
// components
import Button from './Button';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { sendHttpRequest } from '../utils/handleHttpRequest';
import { TabMenuContext } from '../context/TabMenuContext';
// types
import type {
  DropdownOption,
  DropdownOptionColor,
} from './DropdownMenu/DropdownMenu.types';
import type { TabMenuContextType } from '../context/TabMenuContext.types';

const RequestComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>('GET');
  const [buttonTextColor, setButtonTextColor] =
    useState<DropdownOptionColor | null>(null);
  const [urlInput, setUrlInput] = useState('');

  const {
    paramRows,
    headerRows,
    bodyInput,
    setResponseData,
    setResponseHeaders,
  } = useContext(TabMenuContext) as TabMenuContextType;

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownOptionClick = (
    option: DropdownOption,
    color: DropdownOptionColor
  ) => {
    setSelectedOption(option);
    setButtonTextColor(color);
    setIsDropdownOpen(false);
  };

  const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  };

  const handleSendBtnClick = async () => {
    const data = await sendHttpRequest(
      urlInput,
      selectedOption,
      headerRows,
      paramRows,
      bodyInput
    );
    console.log(data);
    setResponseData(data.data);
    setResponseHeaders(data.headers);
  };

  return (
    <div className="flex">
      <div className="mx-auto sm:w-full md:w-4/5 lg:w-2/3 flex">
        <DropdownMenu
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
          selectedOption={selectedOption}
          buttonTextColor={buttonTextColor}
          onToggle={handleDropdownToggle}
          onOptionClick={handleDropdownOptionClick}
        />

        <input
          type="url"
          className="px-4 py-2 bg-inherit text-white placeholder-slate-500 focus:outline-none focus:ring-0 flex-grow border border-slate-600"
          placeholder="http://example.com"
          onChange={handleUrlInputChange}
        />

        <Button text={'Send'} handleClick={handleSendBtnClick} />
      </div>
    </div>
  );
};

export default RequestComponent;
