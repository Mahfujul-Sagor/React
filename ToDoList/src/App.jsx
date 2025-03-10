import {Outlet} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Sidebar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
