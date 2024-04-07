import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <div className="bg-slate-800 text-slate-300 p-4 flex">
      <div className="mx-auto sm:w-full md:w-4/5 lg:w-2/3 p-2 flex border border-slate-600">
        <DropdownMenu />
        <input 
          type="url" 
          className="px-4 py-2 bg-slate-800 text-white focus:outline-none focus:ring-0 flex-grow w-full" 
          placeholder="http://example.com" 
        />
      </div>
      <button className="px-8 border">Send</button>
    </div>
  );
}

export default App;
