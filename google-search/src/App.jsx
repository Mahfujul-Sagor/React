import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const searchRef = useRef(null);
  let URL = `https://www.google.com/search?q=${searchRef}&sca_esv=a046f47d61f24398&sxsrf=ACQVn08u3zyikSTSwC7DQyyYrPmTy9u17w%3A1708963066808&source=hp&ei=-rTcZfaoL63hseMP3JyK4AU&iflsig=ANes7DEAAAAAZdzDClbTTdGzQNQQgS2_cpn5qEgVqitS&ved=0ahUKEwj2jZ7Er8mEAxWtcGwGHVyOAlwQ4dUDCBU&uact=5&oq=hello&gs_lp=Egdnd3Mtd2l6IgVoZWxsbzIKECMYgAQYigUYJzINEC4YgAQYigUYQxixAzINEC4YgAQYigUYQxixAzIQEAAYgAQYigUYQxixAxiDATIWEC4YgAQYigUYQxixAxiDARjHARjRAzINEAAYgAQYigUYQxixAzITEC4YQxiDARjUAhixAxiABBiKBTIQEC4YgAQYigUYQxixAxiDATIKEAAYgAQYigUYQzIFEAAYgARImhNQ_gpY0BBwAXgAkAEAmAG9AaABzQWqAQMwLjW4AQPIAQD4AQGYAgagAt0FqAIKwgIHECMY6gIYJ8ICBBAjGCfCAggQABiABBixA8ICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYigUYsQPCAgoQLhiABBiKBRgnwgIREC4YgAQYigUYkQIYxwEY0QPCAg0QLhiABBiKBRhDGNQCwgILEAAYgAQYigUYkQLCAhMQLhiABBiKBRhDGLEDGIMBGNQCwgIIEC4YgAQYsQOYAwWSBwMxLjU&sclient=gws-wiz`;

  return (
    <div className="min-h-screen bg-zinc-800">
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-y-10">
          <h1 className="text-[5rem] text-white">Something</h1>
          <div className="rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-4 py-2"
              ref={searchRef}
            />
            <a
              href={URL}
              target="_blank"
              className="px-4 py-3 bg-teal-400 text-white"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
