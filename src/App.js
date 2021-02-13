import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inventory from "./inventory/Inventory";
import Library from "./library/Library";

function App() {
  return (
    <div>
      <header className="App-header">
        <span>FireBookStore</span>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/">
            <Library />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
