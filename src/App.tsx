import HeaderComponent from './components/HeaderComponent';
import HTTPRequestComponent from './components/HTTPRequestComponent';
import TabMenu from './TabMenu/TabMenu';

function App() {
  return (
    <div className="bg-slate-800 h-screen">
      <HeaderComponent />
      <HTTPRequestComponent />
      <TabMenu />
    </div>
  );
}

export default App;
