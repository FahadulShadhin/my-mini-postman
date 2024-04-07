import Button from './Button';
import DropdownMenu from './DropdownMenu';

const HTTPRequestComponent = () => {
  return (
    <div className="flex justify-around">
      <div className="mx-auto sm:w-full md:w-4/5 lg:w-2/3 flex">
        <DropdownMenu />
        <input
          type="url"
          className="px-4 py-2 bg-inherit text-white focus:outline-none focus:ring-0 flex-grow border border-slate-600"
          placeholder="http://example.com"
        />
        <Button text={'Send'} />
      </div>
    </div>
  );
};

export default HTTPRequestComponent;
