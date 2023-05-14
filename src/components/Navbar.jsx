import { FaBars } from 'react-icons/fa';
import useAppContext from '../hooks/useAppContext';
import NavLinks from './NavLinks';

function Navbar() {
  const { openSidebar, changePageId } = useAppContext();

  // closing the submenu when the mouse get on the navbar but not the link
  const closeSubmenu = (e) => {
    // check the user not hover on the link itself
    if (!e.target.classList.contains('nav-link')) {
      changePageId(null);
    }
  };

  return (
    <nav onMouseOver={closeSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}
export default Navbar;
