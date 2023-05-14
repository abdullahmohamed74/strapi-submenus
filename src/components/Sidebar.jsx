import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import useAppContext from './../hooks/useAppContext';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  const renderedLinks = sublinks.map((link) => {
    const { links, page, pageId } = link;
    return (
      <article key={pageId}>
        <h4>{page}</h4>
        <div className="sidebar__sublinks">
          {links.map((link) => {
            const { icon, id, label, url } = link;
            return (
              <a key={id} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </article>
    );
  });

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar__constainer">
        <button onClick={closeSidebar} className="sidebar__close-btn">
          <FaTimes />
        </button>
        <div className="sidebar__links">{renderedLinks}</div>
      </div>
    </aside>
  );
}
export default Sidebar;
