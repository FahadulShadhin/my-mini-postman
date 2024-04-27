import type { BodyInputProps } from './TabMenu.types';
import CodeEditor from '@uiw/react-textarea-code-editor';

const BodyInput = ({ jsonValue, handleChange }: BodyInputProps) => {
  return (
    <>
      <label htmlFor="jsonInput" className="text-slate-500 mb-4">
        Body
      </label>
      <CodeEditor
        id="jsonInput"
        language="json"
        value={jsonValue}
        onChange={(e) => handleChange(e.target.value)}
        padding={15}
        style={{
          resize: 'vertical',
          backgroundColor: 'rgb(30 41 59)',
          border: "1px solid rgb(100 116 139)",
          minHeight: "300px",
          fontSize: "0.875rem",
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </>
  );
};

export default BodyInput;
