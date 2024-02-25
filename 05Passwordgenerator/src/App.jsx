import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(()=> {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '@!%#$^&*()*_';

    for (let i = 0; i < length; i++) {
      const value = str.charAt(Math.floor(Math.random() * str.length));
      pass += value;
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen bg-zinc-800 text-white flex justify-center items-center">
      <div className="bg-teal-700 w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8">
        <h1 className="text-3xl font-semibold my-3 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="w-full px-3 py-1 outline-none"
            type="text"
            value={password}
            placeholder='password'
            readOnly
          />
          <button className="bg-blue-400 px-3 py-1">Copy</button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1 p-1">
            <input
              type="range"
              min={8}
              max={100}
              name=""
              id=""
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 p-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
