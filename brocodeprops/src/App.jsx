import Props from './components/Props';
import UserGreeting from './components/UserGreeting';

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={false} username={'Sagor'} />
      <Props name={'Sagor'} age={20} isStudent={true}/>
      <Props name={'Shawn'} />
    </>
  )
}

export default App;
