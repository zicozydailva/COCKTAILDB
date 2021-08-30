import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import SingleCocktail from './components/SingleCocktail';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/cocktail/:id" component={SingleCocktail}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </main>
  );
}

export default App;
