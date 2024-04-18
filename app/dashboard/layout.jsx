// To inform next js, this is a client component 
"use client"; 

import React, { useState } from 'react';
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";


const Layout = ({children}) => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
        <div>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
        <div>
            <Navbar/>
            {children}
        </div>
    </div>
    )
};
export default Layout;