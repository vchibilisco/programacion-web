import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <div className='app-layout'>
      <nav className='app-layout__sidebar'>
        <h1>Menú</h1>
        <ul>
          <li>
            <NavLink
              to={ 'careers' }
              className={ ({ isActive }) => isActive ? 'app-layout__menu-active' : '' }
            >
              Listar Carreras
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ 'students' }
              className={ ({ isActive }) => isActive ? 'app-layout__menu-active' : '' }
            >
              Listar Estudiantes
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='app-layout__main-content'>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
