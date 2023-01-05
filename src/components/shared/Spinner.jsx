import React from 'react'
import spinner from '../assets/Spinner-1s-200px.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default Spinner
