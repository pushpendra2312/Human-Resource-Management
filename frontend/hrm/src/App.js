
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import View from "./View";
import Addemployee from "./Addemployee";
import Editemployee from './Editemployee';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' exact component={Addemployee} />
        <Route path='/edit/:id' exact component={Editemployee} />
        <Route path='/view' exact component={View} />
      </Switch>
    </>
  );
}

export default App;
