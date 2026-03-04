"use client";

import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(1);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>tambah</button>
      ini state <p>{counter}</p>
    </div>
  );
};
