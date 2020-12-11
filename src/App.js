import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/About_page'
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path = '/' component = {Home} />
      <Route exact path='/about' component={About} />
    </Router>
  )
    
}

export default App;
