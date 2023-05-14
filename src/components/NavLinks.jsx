import useAppContext from '../hooks/useAppContext';
import sublinks from './data';

function NavLinks() {
  const { changePageId } = useAppContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        return (
          <button
            key={link.pageId}
            // call changePageId function and pass the pageId
            onMouseEnter={() => changePageId(link.pageId)}
            className="nav-link"
          >
            {link.page}
          </button>
        );
      })}
    </div>
  );
}
export default NavLinks;
