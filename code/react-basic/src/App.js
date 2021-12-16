import Dish, * as D from './components/dish';
import Header from './components/header';
import './styles/App.css';
import { Flag } from './components/dish';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Dish></Dish>
      <Flag></Flag>
    </div>
  );
}

export default App;
