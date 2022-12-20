import './App.css';
import Header from './components/Header';
import IMC from './components/IMC';
function App() {
  return (
    <div className="App">
      <Header  title="Calcule seu IMC"/>
      <IMC/>
    </div>
  );
}

export default App;
