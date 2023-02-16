import './App.css';
import Weather from './components/Weather';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Weather App</h1>
    </header>
    <main>
      <Weather />
    </main>
    <footer>
      <p className="copyright">
        © 2023 by Remi Kykoyubi. All rights reversed
      </p>
    </footer>
  </div>
);

export default App;
