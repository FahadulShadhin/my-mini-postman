import type { BodyInputProps } from './TabMenu.types';

const BodyInput = ({ jsonValue, handleChange }: BodyInputProps) => {
  return (
    <>
      <label htmlFor="jsonInput" className="text-slate-500 mb-4">
        Body
      </label>
      <textarea
        id="jsonInput"
        value={jsonValue}
        onChange={(e) => handleChange(e.target.value)}
        rows={20}
        cols={50}
        style={{ resize: 'vertical' }}
      />
    </>
  );
};

export default BodyInput;
