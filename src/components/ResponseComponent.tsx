import { useContext } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { TabMenuContext } from '../context/TabMenuContext';
import type { TabMenuContextType } from '../context/TabMenuContext.types';

const ResponseComponent = () => {
  const { responseData } = useContext(TabMenuContext) as TabMenuContextType;
  return (
    <div className="mx-auto sm:w-full md:w-4/5 lg:w-2/3">
      <h1>Response</h1>
      <label htmlFor="bodyInput" className="text-slate-500 mb-4">
        Body
      </label>
      <CodeEditor
        readOnly
        id="bodyInput"
        language="json"
        value={JSON.stringify(responseData, null, 2)}
        padding={15}
        style={{
          resize: 'vertical',
          backgroundColor: 'rgb(30 41 59)',
          border: '1px solid rgb(100 116 139)',
          height: '300px',
          overflow: "auto",
          fontSize: '0.875rem',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  );
};

export default ResponseComponent;
