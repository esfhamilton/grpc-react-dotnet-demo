import './App.css';
import PositiveAffirmations from './components/PositiveAffirmations';
import Riddle from './components/Riddle';
import { RiddleClient } from './proto/RiddleServiceClientPb';

function App() {
  const riddleClient = new RiddleClient("http://localhost:8080"); 

  return (
    <div className="App">
      <header className="App-header">
        <Riddle client={riddleClient} />
        <PositiveAffirmations client={riddleClient} />
      </header>
    </div>
  );
}

export default App;
