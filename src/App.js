import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/About_page'
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path = '/' component = {Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path = '/contact' component = {Contact} />
    </Router>
  )
    
}

export default App;
