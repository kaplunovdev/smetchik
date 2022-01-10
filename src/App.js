import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro/Intro";
import {Route, Routes} from "react-router-dom";

import style from './App.css'
import Payment from "./components/Payment/Payment";
import PaymentContainer from "./components/Payment/PaymentContainer";

function App() {
  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/payment' element={<PaymentContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
