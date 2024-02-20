import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          <nav>
            <h1>JobaRouter</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
