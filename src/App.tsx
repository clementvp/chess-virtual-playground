import { useEffect } from "react";
function App() {
  useEffect(() => {
    const worker = new Worker(
      new URL("./stockfish/stockfish-17.1-8e4d048.js", import.meta.url),
    );

    worker.onmessage = (event) => {
      if (typeof event.data === "string") {
        console.log("Message from worker:", event.data);
      }
    };

    worker.postMessage("uci");

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
