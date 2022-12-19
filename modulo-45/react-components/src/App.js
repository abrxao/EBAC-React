import './App.css';
import Header from './components/Header';
import IMC from './components/IMC';
function App() {
  return (
    <div className="App">
      <Header  title="Mudando titulo usando props"/>
      <IMC/>
    </div>
  );
}

export default App;
