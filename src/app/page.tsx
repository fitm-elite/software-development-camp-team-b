'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [promptPayNumber] = useState(() => {
    return localStorage.getItem('promptPayNumber') || '';
  });
  useEffect(() => {
    if(promptPayNumber){
      router.push('/calculator')
    }else{
      router.push('/setting')
    }
  }, []);

  return (
    <div className="bg-red-400">
     
    </div>
  );
}
