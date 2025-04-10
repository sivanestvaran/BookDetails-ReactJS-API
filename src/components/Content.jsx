import React from 'react'

const Content = ({children}) => {
  return (
    <div className='content d-flex flex-column container'>
        {children}
    </div>
  )
}

export default Content
