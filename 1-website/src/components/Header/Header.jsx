import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className='bg-blue-300 text-white font-semibold min-h-10 flex justify-center items-center gap-4'>
      <NavLink className={({isActive}) => {return isActive ? 'text-zinc-600' : ''}} to='/home'>Home</NavLink>
      <NavLink className={({isActive}) => {return isActive ? 'text-zinc-600' : ''}} to='/about'>About</NavLink>
      <NavLink className={({isActive}) => {return isActive ? 'text-zinc-600' : ''}} to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Header;