import './App.css';
import Intro from "./components/Intro/Intro";
import {Route, Routes} from "react-router-dom";
import {Payment} from "./components/Payment/Payment";

function App() {
  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Payment/>}/>
        </Routes>
    </div>
  );
}

export default App;
