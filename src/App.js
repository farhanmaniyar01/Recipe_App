import logo from './logo.svg';
import './App.css';
import Source from "./components/Source"

function App() {
  return (
    <div className="App">
    <h1 style={{fontFamily:"cursive" , fontSize:"70px", textAlign:"center"}}>food Recipe App</h1> 
    
    <Source />
    </div>
  );
}

export default App;
