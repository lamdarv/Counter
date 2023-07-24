// Counter.js
import React, { useState, useEffect } from "react";

function Counter2() {
  // Mendeklarasikan variabel state untuk menyimpan nilai hitungan
  const [count, setCount] = useState(0);

  // Menambahkan efek samping untuk mengubah judul dokumen sesuai dengan nilai hitungan
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // Mengembalikan elemen JSX untuk menampilkan komponen
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter2;
