import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-lg mx-auto bg-gray-500 text-orange-500">
      <h1 className="">All my killteam info... in one place!</h1>
      <div className="flex flex-col text-center">
        <Link href="/noots-info"><a className="item-card">Noots Info</a></Link>
        <Link href="/mewos-info"><a className="item-card">Mewos Info</a></Link>
      </div>
    </div>
  )
}
