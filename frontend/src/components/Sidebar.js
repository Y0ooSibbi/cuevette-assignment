// components/Sidebar.js
import React from 'react';
import { SidebarData } from './SidebarData';

const getInitials = (name) => {
    // Split the name into words
    const words = name.split(' ');
    // Get the first letter of each word
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
    // Return only the first two characters
    return initials.substring(0, 2);
  };


const Sidebar = () => {
  return (
    <aside>
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Pocket Notes</h2>
      </div>
      <ul className="sidebar-list">
        {SidebarData.map((item, index) => (
          <li key={index} onClick={item.onClick} className="sidebar-item">
            <div className="icon">{getInitials(item.title)}</div>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
      <div className="sticky-button">+</div>
  </aside>
    
  );
}

export default Sidebar;
