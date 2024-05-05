import HeaderComponent from './components/HeaderComponent';
import RequestComponent from './components/RequestComponent';
import ResponseComponent from './components/ResponseComponent';
import TabMenu from './components/TabMenu/TabMenu';
import { TabMenuContextProvider } from './context/TabMenuContext';

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <TabMenuContextProvider>
        <HeaderComponent />
        <RequestComponent />
        <TabMenu />
        <ResponseComponent />
      </TabMenuContextProvider>
    </div>
  );
}

export default App;
