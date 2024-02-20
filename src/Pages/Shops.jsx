import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { NewCollections } from '../components/newcollections/NewCollections'
import { Offers } from '../components/offers/Offers'
import { NewsLetter } from '../components/newsletter/NewsLetter'
export const Shops = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}
