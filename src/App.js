import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import PokemonDetails from "./Views/PokemonDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
