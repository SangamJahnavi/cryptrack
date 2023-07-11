import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({back}) {
  return (
    <header className='header'>
      <div className='width'>
        {back && (<Link to="/" className='back'>BACK</Link>)}
       
        <h1><Link to="/">CRYPTO TRACKER</Link></h1>
      </div>
    </header>
  )
}
