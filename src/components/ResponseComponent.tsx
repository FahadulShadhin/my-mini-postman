import { useContext, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { TabMenuContext } from '../context/TabMenuContext';
import type { TabMenuContextType } from '../context/TabMenuContext.types';

type ResponseTabOptions = 'body' | 'headers';

const ResponseComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { responseData, responseHeaders } = useContext(
    TabMenuContext
  ) as TabMenuContextType;
  const responseTabOptions: ResponseTabOptions[] = ['body', 'headers'];

  return (
    <div className="mx-auto sm:w-full md:w-4/5 lg:w-2/3 h-[25rem] overflow-auto">
      <div className='flex justify-between border-t border-slate-500 pt-2'>
        <h1 className="text-white">Response</h1>
        <div className='text-slate-500'>
          <span className='ml-4'>Status: <span className='text-green-400'>200 OK</span></span>
          <span className='ml-4'>Time: <span className='text-green-400'>1231 ms</span></span>
          <span className='ml-4'>Size: <span className='text-green-400'>1.09 KB</span></span>
        </div>
      </div>
      <div className="flex">
        {responseTabOptions.map((option, index) => (
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
            <CodeEditor
              readOnly
              id="bodyResponse"
              language="json"
              value={JSON.stringify(responseData, null, 2)}
              padding={15}
              style={{
                backgroundColor: 'rgb(30 41 59)',
                border: '1px solid rgb(100 116 139)',
                height: '300px',
                overflow: 'auto',
                fontSize: '0.875rem',
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
            />
          </div>
        )}

        {activeTab === 1 && (
          <div className="text-white h-[300px] overflow-auto">
            {responseHeaders &&
              Object.keys(responseHeaders).map((key, index) => (
                <div
                  key={`response-header-${index}`}
                  className={`flex justify-between ${index === Object.keys(responseHeaders).length - 1 ? 'border-b' : ''} border-t border-r border-l border-slate-500`}
                >
                  <span className="text-white px-4 flex-grow border-r border-r-slate-500 w-1/2">
                    {key}
                  </span>
                  <span className="text-white px-4 flex-grow w-1/2">
                    {responseHeaders[key]}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseComponent;
