"use client";
import { useState } from "react";


export default function Homepage() {
  const [count,setCount] = useState<number>(0)
  /*let count = 0;8*/
  return (
    <main>
        <h1>contador</h1>
        <div>
          <button onClick={()=>setCount(0)}>
            Reset
          </button>
          <button onClick={()=>setCount(count-1)}>
            -
          </button>
          <span>{count}</span>
          <button onClick={()=>setCount(count+1)}>
            +
          </button>
        </div>
    </main>
  );
} 