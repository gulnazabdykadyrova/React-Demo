import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favourite from "./pages/Favourite";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favourite">
          <Favourite />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
