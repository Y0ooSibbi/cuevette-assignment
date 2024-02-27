// components/SidebarItem.js

import React from 'react';

const SidebarItem = ({ item, onItemClick }) => {
  const handleClick = () => {
    onItemClick(item);
  };

  return (
    <li onClick={handleClick} className="sidebar-item">
      <div className="icon">{getInitials(item.title)}</div>
      <span>{item.title}</span>
    </li>
  );
}

export default SidebarItem;
