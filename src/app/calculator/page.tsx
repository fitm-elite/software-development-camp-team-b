'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function page() {
  const [preview, setPreview] = useState('');

  const router = useRouter();

  const numberUiList: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
  function addNumber(text: string) {
    if ((preview.length == 0 && text != '0') || preview.length > 0) {
      setPreview((prev) => `${prev}${text}`);
    }
  }
  function addOperator(text: string) {
    let length = preview.length;
    if (length != 0 && preview.at(-1) != '*' && preview.at(-1) != '+') {
      setPreview((prev) => prev + text);
    } else if (text != preview.at(-1) && length != 0) {
      setPreview((prev) => prev.slice(0, -1) + text);
    }
  }

  function isValidPreview(): boolean {
    return /^[0-9*+]+$/.test(preview);
  }

  function calculate() {
    try {
      if (!isValidPreview()) {
        return;
      }
      if (preview.at(-1) == '*' || preview.at(-1) == '+') {
        return eval(preview.slice(0, -1));
      }
      return eval(preview);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-[#3C3D37] flex flex-col justify-center h-screen w-full">
      <div className="bg-black flex justify-end items-center h-[5vh]">
        <button
          onClick={() => {
            router.push('/setting');
          }}
          className="mr-[1rem] text-white text-2xl"
        >
          Setting
        </button>
        {/* <p ></p> */}
      </div>
      <div className="flex flex-col items-end justify-center h-[45vh]">
        <div className="text-5xl text-white mr-[1rem]">{preview}</div>
        <div className="text-7xl text-white font-bold mt-[5vh] mr-[1rem]">
          {calculate()}
        </div>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-2">
        <button
          onClick={() => {
            addOperator('+');
          }}
          className="btn-operator"
        >
          +
        </button>
        <button
          onClick={() => {
            addOperator('*');
          }}
          className="btn-operator"
        >
          x
        </button>
        <button
          onClick={() => {
            setPreview(preview.slice(0, -1));
          }}
          className="bg-[#ECDFCC] text-center text-3xl w-[80%] h-[8vh] rounded-lg mt-[1rem] mb-[1rem]"
        >
          DEL
        </button>
        <button
          onClick={() => {
            setPreview('');
          }}
          className="bg-[#D45555] text-center text-white text-3xl w-[80%] h-[8vh] rounded-lg mt-[1rem] mb-[1rem]"
        >
          AC
        </button>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-2">
        {numberUiList.map((value, index) => (
          <button
            key={index}
            onClick={() => addNumber(value)}
            className="btn-number"
          >
            {value}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-3 place-items-center">
        <button onClick={() => addNumber('0')} className="btn-number">
          0
        </button>
        <button onClick={()=> router.push(`/genqr/${calculate()}`)} className="bg-[#52913D] text-center text-5xl text-white font-bold w-[80%] h-[8vh] rounded-lg mt-[1rem] mb-[1rem] col-span-2">
          QR
        </button>
      </div>
    </div>
  );
}
