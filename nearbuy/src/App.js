import logo from './logo.svg';
import './App.css';
import { Category } from './Pages/Category/Category';
import Checkout from "./Pages/Checkout/Checkout"; 
function App() {
  return (
    <div className="App">
      <Checkout />
      <Category/>
    </div>
  }


export default App;
