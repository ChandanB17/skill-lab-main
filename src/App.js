import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import About from './Pages/About';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/"
            element={<Home />}>
          </Route>
          <Route exact path="/about"
            element={<About />}>
          </Route>
          <Route exact path="/signup"
            element={<Signup />}>
          </Route>
          <Route exact path="/contact"
            element={<Contact />}>
          </Route>
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
