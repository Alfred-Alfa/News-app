import logo from './logo.svg';
import './App.css';
import Viewn from './Component/Viewn';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path='/' element={<Viewn/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
