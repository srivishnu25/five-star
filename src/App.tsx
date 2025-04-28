import { useState } from "react";
import "./App.css";
import { IconStar } from "./assets/icons";

function App() {
  const [star, setStar] = useState(0);

  return (
    <>
      <h1 className="mb-8">5 Star Rating</h1>
      <div className="flex items-center justify-center gap-3">
        {Array.from({ length: 5 }).map((_, id) => (
          <button
            key={id}
            className={`cursor-pointer bg-transparent w-7 aspect-square text-white ${
              id + 1 <= star && "!text-orange-300"
            }`}
            onClick={() => setStar(id + 1)}
          >
            <IconStar />
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
