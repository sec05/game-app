import { Switch, Route,} from "react-router-dom";
import '../styles/App.css';
import index from "./index.jsx";
import unknown from "./unknown.jsx";
import login from "./login"
import signup from "./signup"
function App() {
  return (
    <div className="App">
      <Route render={({location})=>(
        <Switch location={location}>
          <Route path="/" exact component={index}/>
          <Route path="/login" component={login}/>
          <Route path="/signup" exact component={signup}/>
          <Route path="/" component={unknown}/>
        </Switch>
      )}/>
    </div>
  );
}

export default App;
