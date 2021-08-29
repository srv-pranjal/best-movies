import React from "react";

export default function Genre({ setGenre }) {
  return (
    <div>
      <button onClick={() => setGenre("Mystery")}>Mystery</button>
      <button onClick={() => setGenre("Crime")}>Crime</button>
      <button onClick={() => setGenre("Sci-Fi")}>Sci-Fi</button>
    </div>
  );
}
