import { createContext, useState } from 'react';

const AppContext = createContext();

function Provider({ children }) {
  // toggle the sidebar based on it
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // to determine which object to be displayed in the submenu
  const [pageId, setPageId] = useState(null);

  // called when the user hover on the name in the navbar, called in NavLinks component and pass the "PageId"
  // called in Submenu component and pass "null" when the user mouse moves out of the submenu
  // called in Navbar component and pass "null" when the user mouse moves on of the Navbar out of the link
  const changePageId = (id) => {
    setPageId(id);
  };

  // called when the user clicks on the button in the navbar in small screens
  // called in the Navber component
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // called when the user clicks on the x button in the sidebar
  // called in the sideber component
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        pageId,
        changePageId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { Provider };
export default AppContext;
