
import PetCard from './components/PetCard';

function App() {
  return (
    <div>
      <h1>Ficha do Pet</h1>
      <PetCard nome="Theo" especie="Pinscher-Bravo" />
      <PetCard nome="Jade" especie="Vira-Aranha" />
    </div>
  );
}

export default App;