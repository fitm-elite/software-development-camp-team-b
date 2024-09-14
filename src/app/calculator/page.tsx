'use client'

import React from 'react'

export default function page() {
  return (
    <div className='bg-blue-400 flex flex-col justify-center h-screen w-full'>
      <div className='bg-green-400 flex justify-end'>
        Setting
      </div>
      <div className='bg-red-500 flex flex-col items-end'>
        <div>10+20</div>
        <div>30</div>
      </div>
      <div className='bg-pink-500 grid grid-cols-4 content-center'>
        <div className='bg-white border text-center w-[5rem] h-[5rem]'>+</div>
        <div className='bg-white border text-center w-[5rem] h-[5rem]'>x</div>
        <div className='bg-white border text-center w-[5rem] h-[5rem]'>DEL</div>
        <div className='bg-white border text-center w-[5rem] h-[5rem]'>AC</div>
      </div>
      <div className='bg-purple-500 grid grid-cols-3'>
        <div className='bg-white border text-center'>7</div>
        <div className='bg-white border text-center'>8</div>
        <div className='bg-white border text-center'>9</div>
        <div className='bg-white border text-center'>4</div>
        <div className='bg-white border text-center'>5</div>
        <div className='bg-white border text-center'>6</div>
        <div className='bg-white border text-center'>1</div>
        <div className='bg-white border text-center'>2</div>
        <div className='bg-white border text-center'>3</div>
      </div>
      <div className='bg-cyan-500 grid grid-cols-2'>
        <div className='bg-white border text-center'>0</div>
        <div className='bg-white border text-center'>QR</div>
      </div>
    </div>
  )
}