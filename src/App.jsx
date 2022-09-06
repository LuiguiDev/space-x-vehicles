import './App.scss';
import Spacecraft from './components/Spacecraft.jsx'
import Vehicles from './obj.js'

function App() {
  return (
    <div className="App">
      <h1>Space X vehicles</h1>
      <div className='vehicles'>
      <Spacecraft {...Vehicles[0]} />
      <Spacecraft {...Vehicles[1]} />
      <Spacecraft {...Vehicles[2]} />
      </div>
    </div>
  );
}

export default App;
