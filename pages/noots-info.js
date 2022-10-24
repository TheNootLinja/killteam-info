import React from 'react'
import Link from 'next/link'

const NootsInfo = () => {
  return (
    <div className="max-w-lg mx-auto bg-gray-500 text-orange-500 mt-10">
        <div className="flex flex-col text-center">
            <h1>Noots KT Lists</h1>
            <Link href="/noot-pm-deathguard"><a className="item-card">PM Deathguard</a></Link>
      </div>
    </div>
  )
}

export default NootsInfo