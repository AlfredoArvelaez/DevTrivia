import React from 'react'

export const IconLink = ({ to, iconName }) => {
  return (
    <a href={ to }>
      <i className={`${iconName} text-4xl text-gray-800 hover:text-white`} />
    </a>
  )
}
