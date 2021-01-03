import { Switch, Route,} from "react-router-dom";
import index from "./index.jsx";
import unknown from "./unknown.jsx";
import login from "./login"
import signup from "./signup"
import "../styles/app.scss"
import Header from "./components/Header/Header.jsx";
function App() {
  return (
    <div>
      <Header/>
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
