import './App.css';
import Intro from "./components/Intro/Intro";
import {Route, Routes} from "react-router-dom";
import PaymentContainer from "./components/Payment/PaymentContainer";

function App() {
  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/addPayment' element={<PaymentContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
