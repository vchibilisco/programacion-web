import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  return (
    <div className='layout-root'>
      <div className='layout-menu'>
        <h2>Menú</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to={ '/' }
                className={ ({ isActive }) => ( isActive ? 'menu-selected' : '' ) }
              >
                Página Principal
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ '/careers' }
                className={ ({ isActive }) => ( isActive ? 'menu-selected' : '' ) }
              >
                Carreras
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='layout-main-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
