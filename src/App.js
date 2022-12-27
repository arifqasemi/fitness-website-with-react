import Home from './component/home.js'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Exercise from './component/exercise.js';
import Navbar from './component/navbar'

function App() {
  return (
   
    <div className="App">
     <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path="/exercise/:id" element={<Exercise/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
