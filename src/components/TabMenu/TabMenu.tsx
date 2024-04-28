import { useContext, useState } from 'react';
import KeyValueInputs from './KeyValueInputs';
import BodyInput from './BodyInput';
import { TabMenuContext } from '../../context/TabMenuContext';
import type { TabMenuContextType } from '../../context/TabMenuContext.types';
import type { TabMenuOptions, Row } from './TabMenu.types';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    paramRows,
    setParamRows,
    headerRows,
    setheaderRows,
    bodyInput,
    setBodyInput,
  } = useContext(TabMenuContext) as TabMenuContextType;

  const tabMenuOptions: TabMenuOptions[] = ['Params', 'Headers', 'Body'];

  const handleAddRow = () => {
    if (activeTab === 0)
      setParamRows([...paramRows, { key: '', value: '', description: '' }]);
    else
      setheaderRows([...headerRows, { key: '', value: '', description: '' }]);
  };

  const handleDeleteRow = (index: number) => {
    if (activeTab === 0) {
      const updatedRows = [...paramRows];
      updatedRows.splice(index, 1);
      setParamRows(updatedRows);
    } else {
      const updatedRows = [...headerRows];
      updatedRows.splice(index, 1);
      setheaderRows(updatedRows);
    }
  };

  const handleChange = (index: number, field: keyof Row, value: string) => {
    if (activeTab == 0) {
      const updatedRows = [...paramRows];
      updatedRows[index][field] = value;
      setParamRows(updatedRows);
    } else {
      const updatedRows = [...headerRows];
      updatedRows[index][field] = value;
      setheaderRows(updatedRows);
    }
  };

  const handleBodyChange = (bodyInput: string) => {
    setBodyInput(bodyInput);
  };

  return (
    <div className="mx-auto sm:w-full md:w-4/5 lg:w-2/3">
      <div className="flex">
        {tabMenuOptions.map((option, index) => (
          <button
            key={index}
            className={`pt-4 mr-8 cursor-pointer 
                        ${activeTab === index ? 'text-white border-b border-b-orange-400' : 'text-slate-500'}`}
            onClick={() => setActiveTab(index)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === 0 && (
          <div className="flex flex-col">
            <span className="text-slate-500 mb-4">Query params</span>
            <KeyValueInputs
              rows={paramRows}
              handleChange={handleChange}
              handleAddRow={handleAddRow}
              handleDeleteRow={handleDeleteRow}
            />
          </div>
        )}

        {activeTab === 1 && (
          <div className="flex flex-col">
            <span className="text-slate-500 mb-4">Headers</span>
            <KeyValueInputs
              rows={headerRows}
              handleChange={handleChange}
              handleAddRow={handleAddRow}
              handleDeleteRow={handleDeleteRow}
            />
          </div>
        )}

        {activeTab === 2 && (
          <div className="flex flex-col">
            <BodyInput jsonValue={bodyInput} handleChange={handleBodyChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
