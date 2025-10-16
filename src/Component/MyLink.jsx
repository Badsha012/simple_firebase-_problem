import React from 'react';
import { NavLink } from 'react-router';
 // ✅ react-router-dom use করতে হবে

const MyLink = ({ to, className, children }) => {
  return (
    <div>
     <NavLink
          to={to}
        className={({ isActive }) =>
          isActive ? "text-pink-500" : `${className} font-semibold`
        }>
        {children}
     </NavLink>
    </div>
  );
};

export default MyLink;
