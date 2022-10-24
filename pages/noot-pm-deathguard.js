import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'

import dgEquipment from '../public/assets/images/Deathguard-EQ.png'
import pmChampion from '../public/assets/images/PlagueMarineChampion-DC.png'
import pmFighter from '../public/assets/images/PlagueMarineFighter-DC.png'
import pmIconBearer from '../public/assets/images/PlagueMarineIconBearer-DC.png'
import pmWarrior from '../public/assets/images/PlagueMarineWarrior-DC.png'

const NootPMDeathguard = () => {

  const handleClick = (e) => {
    console.log(e.target.alt)
  }

  const photoWidth = 1000;
  const photoHeight = 600;

  return (
    <div>
    <Header/>
    <div className="w-fit mt-20 mx-auto">
          <div id="dgEquipment" className="h-20"></div>
          <div className="image-card" onClick={handleClick}>
            <Image src={dgEquipment} alt="Deathguard Equipment" width={photoWidth} height={photoHeight}/>
          </div>
          <div id="pmChampion" className="h-20"></div>
          <div className="image-card">
            <Image src={pmChampion} alt="Deathguard Equipment" width={photoWidth} height={photoHeight}/>
          </div>
          <div id="pmFighter" className="h-20"></div>
          <div className="image-card">
            <Image src={pmFighter} alt="Deathguard Equipment" width={photoWidth} height={photoHeight}/>
          </div>
          <div id="pmIconBearer" className="h-20"></div>
          <div className="image-card">
            <Image src={pmIconBearer} alt="Deathguard Equipment" width={photoWidth} height={photoHeight}/>
          </div>
          <div id="pmWarrior" className="h-20"></div>
          <div className="image-card">
            <Image src={pmWarrior} alt="Deathguard Equipment" width={photoWidth} height={photoHeight}/>
          </div>
    </div>
    <div id="notes" className="bg-red-500 text-center">
      <h1>Things to remember</h1>
      <h2>1. Initiative Phase</h2>
      <p>Ready Operatives</p>
      <p>Determine Initiative</p>
      <h2>2. Strategy Phase</h2>
      <p>Generate CP</p>
      <p>Spend CP on strategic ploys</p>
      <ul>
        <li>Malicous Volleys</li>
        <li>Hateful Assault</li>
      </ul>
      <h2>3. Firefight Phase</h2>
      <p></p>
    </div>
    </div>
  )
}

export default NootPMDeathguard