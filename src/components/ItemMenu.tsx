import React from 'react'
import Arrow from '@/assets/arrow-down.svg'
import Image from 'next/image'

type Props = {
   name: string 
}

export default function itemMenu({name}: Props) {
  return (
    <button className="flex items-center gap-3">
    <span className="text-white font-bold">{name}</span>
    <Image 
    src={Arrow}
    alt="Arrow dropdown"
    />
   </button>
  )
}
