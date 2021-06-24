import React from 'react'

function PopupMenuItem({children, ...props}) {
  return (
    <>
      <li {...props}>{children}</li>
    </>
  )
}

export default PopupMenuItem
