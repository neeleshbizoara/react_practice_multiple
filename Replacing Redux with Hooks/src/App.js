import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import FallbackPage from "./containers/FallbackPage";

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
          <Route component={FallbackPage} /> {/* either route to fallback or Redirect to protect routes*/}
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
