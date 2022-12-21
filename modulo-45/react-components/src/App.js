import './App.css';
import Header from './components/Header';
import IMC from './components/IMC';
import LoginControl from './components/Login/LoginControl';

function App() {
  return (
    <div className="App">
      {/*<Header  title="Calcule seu IMC"/>
      <IMC/>*/}
      <LoginControl/>
    </div>
  );
}

export default App;
