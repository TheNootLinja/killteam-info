import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex items-center fixed top-0 z-10 bg-red-500 w-full h-20'>
        <div className='flex justify-evenly bg-slate-200 w-full'>
            <Link href="#notes"><a>Notes</a></Link>
            <Link href="#notes"><a>Equipment</a></Link>
            <Link href="#notes"><a>Plague Marine Champion</a></Link>
            <Link href="#notes"><a>Plague Marine Fighter</a></Link>
            <Link href="#notes"><a>Plague Marine Icon Bearer</a></Link>
            <Link href="#notes"><a>Plague Marine Warrior</a></Link>
        </div>
    </div>
  )
}

export default Header