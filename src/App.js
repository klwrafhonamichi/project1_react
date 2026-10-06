import './App.css';
import Button1 from './components/button1';
import Labelalamat from './components/labelalamat';
import Labelnama from './components/labelnama';

function App() {
  return (
    <div className="App">
      
      < h1>Profile</h1>

      <Labelnama nama="Siti"/>
      <Labelnama nama="Diablo"/>

      <Labelalamat alamat="Jalan Batu"/>
      <Button1/>


    </div>
  );
}

export default App;
