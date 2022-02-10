import './App.css';
import Intro from "./components/Intro/Intro";
import {Route, Routes} from "react-router-dom";
import PaymentContainer from "./components/Payment/PaymentContainer";
import {Payment} from "./components/Payment/Payment";

function App() {
  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
    </div>
  );
}

export default App;
