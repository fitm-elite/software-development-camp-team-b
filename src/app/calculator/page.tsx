'use client'

import React from 'react'

export default function page() {
  return (
    <div className='bg-[#3C3D37] flex flex-col justify-center h-screen w-full'>
      <div className='bg-black flex justify-end items-center h-[5vh]'>
        <p className='mr-[1rem] text-white text-2xl'>Setting</p>
      </div>
      <div className='flex flex-col items-end justify-center h-[45vh]'>
        <div className='text-5xl text-white mr-[1rem]'>10+20</div>
        <div className='text-7xl text-white font-bold mt-[5vh] mr-[1rem]'>100,000</div>
      </div>
      <div className='grid grid-cols-4 place-items-center gap-2'>
        <button className='btn-operator'>
          +
        </button>
        <button className='btn-operator'>
          x
        </button>
        <button className='bg-[#ECDFCC] text-center text-3xl w-[80%] h-[8vh] rounded-lg mt-[1rem] mb-[1rem]'>
          DEL
        </button>
        <button className='bg-[#D45555] text-center text-white text-3xl w-[80%] h-[8vh] rounded-lg mt-[1rem] mb-[1rem]'>
          AC
        </button>
      </div>
      
      <div className=' grid grid-cols-3 place-items-center gap-2'>
        <button className='btn-number'>
          7
        </button>
        <button className='btn-number'>
          8
        </button>
        <button className='btn-number'>
          9
        </button>
        <button className='btn-number'>
          4
        </button>
        <button className='btn-number'>
          5
        </button>
        <button className='btn-number'>
          6
        </button>
        <button className='btn-number'>
          1
        </button>
        <button className='btn-number'>
          2
        </button>
        <button className='btn-number'>
          3
        </button>
      </div>
      <div className=' grid grid-cols-3 place-items-center'>
        <button className='btn-number'>
          0
        </button>
        <button className='bg-[#52913D] text-center text-5xl text-white font-bold w-[80%] h-[8vh] rounded-lg mt-[1rem] mb-[1rem] col-span-2'>
          QR
        </button>
      </div>
    </div>
  )
}