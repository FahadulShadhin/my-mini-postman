import { useState } from 'react';
import type { TabMenuOptions, Row } from './TabMenu.types';
import KeyValueInputs from './KeyValueInputs';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [paramRows, setParamRows] = useState<Row[]>([
    { key: '', value: '', description: '' },
  ]);
  const [headersRows, setHeadersRows] = useState<Row[]>([
    { key: '', value: '', description: '' },
  ]);

  const tabMenuOptions: TabMenuOptions[] = ['Params', 'Headers', 'Body'];

  const handleAddRow = () => {
    if (activeTab === 0)
      setParamRows([...paramRows, { key: '', value: '', description: '' }]);
    else
      setHeadersRows([...headersRows, { key: '', value: '', description: '' }]);
  };

  const handleDeleteRow = (index: number) => {
    if (activeTab === 0) {
      const updatedRows = [...paramRows];
      updatedRows.splice(index, 1);
      setParamRows(updatedRows);
    } else {
      const updatedRows = [...headersRows];
      updatedRows.splice(index, 1);
      setHeadersRows(updatedRows);
    }
  };

  const handleChange = (index: number, field: keyof Row, value: string) => {
    if (activeTab == 0) {
      const updatedRows = [...paramRows];
      updatedRows[index][field] = value;
      setParamRows(updatedRows);
    } else {
      const updatedRows = [...headersRows];
      updatedRows[index][field] = value;
      setHeadersRows(updatedRows);
    }
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
          <KeyValueInputs
            rows={paramRows}
            handleChange={handleChange}
            handleAddRow={handleAddRow}
            handleDeleteRow={handleDeleteRow}
          />
        )}

        {activeTab === 1 && (
          <KeyValueInputs
            rows={headersRows}
            handleChange={handleChange}
            handleAddRow={handleAddRow}
            handleDeleteRow={handleDeleteRow}
          />
        )}
      </div>
    </div>
  );
};

export default TabMenu;