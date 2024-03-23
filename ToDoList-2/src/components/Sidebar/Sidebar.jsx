import Footer from '../Footer/Footer';
import logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <div className="w-full min-h-screen">

      <div className="bg-gray-700 text-white w-[15rem] min-h-screen p-4 flex flex-col items-center justify-between">

        <div className='flex gap-2 items-center'>
          <img src={logo} alt="Logo" width='50px'/>
          <h1 className='text-2xl font-bold'>ToDoList</h1>
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            className="w-full bg-gray-500 rounded outline-none px-2 py-1"
            placeholder="Enter your task"
          />
          <button className="w-full bg-teal-500 font-semibold px-2 py-1 rounded">
            Add
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
