import './App.css';
import ratpic from './pic/ratbeer.jpg';

function App() {
  return (
    <div className="App">
      <p>
      One Ring to rule them all, One ring to find them; One ring to bring them all

and in the darkness bind them.
      </p>
      <div>
        <img src={ratpic}></img>
      </div>
    </div>
  );
}

export default App;
