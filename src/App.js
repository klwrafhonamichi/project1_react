import './App.css';
import Labelalamat from './components/labelalamat';
import Labelnama from './components/labelnama';

function App() {
  return (
    <div className="App">
      
      < h1>Profile</h1>

      <Labelnama nama="Siti"/>
      <Labelnama nama="Diablo"/>

      <Labelalamat alamat="Jalan Batu"/>
      


    </div>
  );
}

export default App;
