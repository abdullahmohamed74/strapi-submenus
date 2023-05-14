import { useRef } from 'react';
import useAppContext from '../hooks/useAppContext';
import sublinks from './data';

function Submenu() {
  const { pageId, changePageId } = useAppContext();
  const submenuRef = useRef(null);

  // use pageId to determine which object to be displayed in the submenu
  const currentPage = sublinks.find((link) => link.pageId === pageId);

  // close the submenu if the use get out of the submenu
  const closeSubmenu = (event) => {
    const { left, right, bottom } = submenuRef.current.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX > right - 1 || clientX < left + 1 || clientY > bottom - 1) {
      changePageId(null);
    }
  };

  if (currentPage)
    return (
      <div
        ref={submenuRef}
        onMouseLeave={closeSubmenu}
        className="submenu show-submenu"
      >
        <h5>{currentPage.page}</h5>
        <div
          style={{
            gridTemplateColumns:
              currentPage.links.length > 3 ? '1fr 1fr' : '1fr',
          }}
          className="submenu__links"
        >
          {currentPage.links.map((link) => {
            const { icon, id, url, label } = link;
            return (
              <a key={id} href={url}>
                {icon} {label}
              </a>
            );
          })}
        </div>
      </div>
    );
}
export default Submenu;
