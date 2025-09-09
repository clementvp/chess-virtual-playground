import { useEffect, useRef } from "react";

export function useStockfish() {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(
      new URL("../stockfish/stockfish-17.1-8e4d048.js", import.meta.url),
      { type: "module" },
    );
    workerRef.current = worker;

    worker.onmessage = (event) => {
      if (typeof event.data === "string") {
        console.log("Message from Stockfish:", event.data);
      }
    };

    return () => {
      worker.terminate();
    };
  }, []);

  const postMessage = (msg: string) => {
    workerRef.current?.postMessage(msg);
  };

  return { postMessage };
}
