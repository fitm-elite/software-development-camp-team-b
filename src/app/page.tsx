'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const promptPay =  localStorage.getItem('promptPayNumber')
    if(!promptPay){
      router.push('/setting')
    }
  }, []);

  return (
    <div className="bg-red-400">
     
    </div>
  );
}
