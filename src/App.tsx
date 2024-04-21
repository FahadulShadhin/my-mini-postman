import HeaderComponent from './components/HeaderComponent';
import HTTPRequestComponent from './components/HTTPRequestComponent';
import TabMenu from './components/TabMenu/TabMenu';
import { TabMenuContextProvider } from './context/TabMenuContext';

function App() {
  return (
    <div className="bg-slate-800 h-screen">
      <TabMenuContextProvider>
        <HeaderComponent />
        <HTTPRequestComponent />
        <TabMenu />
      </TabMenuContextProvider>
    </div>
  );
}

export default App;
