import { useStockfish } from "./hooks/useStockfish";
import { Button } from "@chakra-ui/react";

function App() {
  const { postMessage } = useStockfish();

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => postMessage("uci")}>
        Send UCI Command to Stockfish
      </Button>
      {/* Utilisez postMessage("commande") pour envoyer des commandes à Stockfish */}
    </>
  );
}

export default App;
