import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-w-full min-h-screen bg-zinc-500'>
        <Cards username="Sagor" post="Software Engineer" />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default App;
