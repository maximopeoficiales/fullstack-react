import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import DashboardPage from "../screens/pages/DashboardPage/DashboardPage";
import HomePage from "../screens/pages/HomePage/HomePage";
import PromedioPage from "../screens/pages/PromedioPage/PromedioPage";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/averageAge" component={PromedioPage} />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
