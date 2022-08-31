import './App.css';
import Spacecraft from './components/Spacecraft.jsx'

var vehicles = [
  {
    name:'Falcon 9',
    image:'falcon-9',
    height:'70 m',
    diameter:'3.7 m',
    mass:'549,054 kg',
    payload:'22,800 kg'
  },
  {
    name:'Falcon heavy',
    image:'falcon-heavy',
    height:'70 m',
    diameter:'3.7m',
    mass:'1,420,788 Kg',
    payload:'63,000 Kg',
  },
  {
    name:'Starship SN15',
    image:'starship',
    height:'120 m',
    diameter:'9 m',
    mass:'',
    payload:'100 t',
  }
]

function App() {
  return (
    <div className="App">
      <h1>Space X vehicles</h1>
      <div className='vehicles'>
      <Spacecraft {...vehicles[0]} />
      <Spacecraft {...vehicles[1]} />
      <Spacecraft {...vehicles[2]} />
      </div>
    </div>
  );
}

export default App;
