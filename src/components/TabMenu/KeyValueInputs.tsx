import Plus from '../icons/Plus';
import TrashCan from '../icons/TrashCan';
import type { KeyValueInputsProps } from './TabMenu.types';

const KeyValueInputs = ({
  rows,
  handleChange,
  handleAddRow,
  handleDeleteRow,
}: KeyValueInputsProps) => {
  return (
    <div className="flex flex-col">
      {rows.map(({ key, value, description }, index) => (
        <div
          className={`flex border ${index !== 0 && 'border-t-0'} border-slate-600`}
          key={index}
        >
          <input
            type="text"
            value={key}
            onChange={(e) => handleChange(index, 'key', e.target.value)}
            className="px-4 py-1 bg-inherit text-white placeholder-slate-500 focus:outline-none flex-grow focus:ring-0 border-r border-slate-600"
            placeholder="Key"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
            className="px-4 py-1 bg-inherit text-white placeholder-slate-500 focus:outline-none flex-grow focus:ring-0 border-r border-slate-600"
            placeholder="Value"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            className="px-4 py-1 bg-inherit text-white placeholder-slate-500 focus:outline-none flex-grow focus:ring-0"
            placeholder="Description"
          />
          {index === rows.length - 1 && (
            <button className="pr-2" onClick={() => handleAddRow()}>
              <Plus fill="#ffffff" height="12px" width="12px" />
            </button>
          )}
          {rows.length !== 1 && (
            <button className="pr-2" onClick={() => handleDeleteRow(index)}>
              <TrashCan fill="#ffffff" height="12px" width="12px" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default KeyValueInputs;
