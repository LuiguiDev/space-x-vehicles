import './App.css';
import Spacecraft from './components/spacecraft.jsx'

function App() {
  return (
    <div className="App">
      <Spacecraft
        name='Falcon 9'
        image='falcon-9'
        height='70 m'
        diameter='3.7 m'
        mass='549,054 kg'
        payload='22,800 kg' />
    </div>
  );
}

export default App;
