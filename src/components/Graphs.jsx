import React from 'react'
import { VortexPage } from './ui/vortex'

const Graphs = () => {
  return (
    <section className="w-full relative">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl text-white md:text-secondary-900 dark:text-white justify-center items-center flex mb-2">Getting Bored?</h2>
      <p className='text-sm justify-center items-center flex'>Check this out!</p>
      <VortexPage />
    </section>
  )
}

export default Graphs