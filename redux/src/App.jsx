import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
