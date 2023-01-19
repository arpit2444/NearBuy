import logo from './logo.svg';
import './App.css';
import { Category } from './Pages/Category/Category';
import Checkout from "./Pages/Checkout/Checkout";
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      {/* <Checkout />
      <Category /> */}
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}


export default App;
