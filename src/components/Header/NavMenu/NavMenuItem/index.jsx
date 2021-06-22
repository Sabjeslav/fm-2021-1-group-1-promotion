import React from 'react'
import { NavLink } from 'react-router-dom';

function NavMenuItem({children, ...props}) {
  return (
    <>
      <NavLink {...props}>
        {children}
      </NavLink>
    </>
  )
}

export default NavMenuItem
