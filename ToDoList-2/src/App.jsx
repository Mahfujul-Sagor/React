import Sidebar from './components/Sidebar/Sidebar';
import Footer from '.components/Footer/Footer';
import {Outlet} from 'react-router-dom';


function App() {

  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
