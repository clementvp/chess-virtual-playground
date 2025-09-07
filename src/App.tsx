import { useStockfish } from "./hooks/useStockfish";

function App() {
  const { postMessage } = useStockfish();

  return (
    <>
      <h1>Vite + React</h1>
      {/* Utilisez postMessage("commande") pour envoyer des commandes à Stockfish */}
    </>
  );
}

export default App;
