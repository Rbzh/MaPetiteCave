import './App.css';
import { BottleDetail } from './components/BottleDetail';
import { BottleList } from './components/BottleList';
import { bottlesMock } from './data/BottlesMock';

function App() {
  return (
    <div className="App">
      <BottleList bottles={bottlesMock} />
    </div>
  );
}

export default App;
