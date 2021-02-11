import { Switch, Route,} from "react-router-dom";
import index from "./index.jsx";
import unknown from "./unknown.jsx";
import GameThumbnails from "./GameThumbnails.jsx";
import Background from "./components/Background/Background.jsx"
import "../styles/app.scss"
import Header from "./components/Header/Header.jsx";
function App() {
  return (
    <div>
      <Header/>
    <Background/>
      <Route render={({location})=>(
        <Switch location={location}>
          <Route path="/" exact component={index}/>
          <Route path="/games" exact component={GameThumbnails}/>
          <Route path="/" component={unknown}/>
        </Switch>
      )}/>
    </div>
      

  );
}

export default App;
