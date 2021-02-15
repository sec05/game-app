import { Switch, Route,} from "react-router-dom";
import index from "./index.jsx";
import unknown from "./unknown.jsx";
import GameThumbnails from "./GameThumbnails.jsx";
import planetGuesser from "./Games/planetGuesser"
import Background from "./components/Background/Background.jsx"
import "../styles/app.scss"
import Header from "./components/Header/Header.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Header/>
    <Background/>
      <Route render={({location})=>(
        <Switch location={location}>
          <Route path="/" exact component={index}/>
          <Route path="/games" exact component={GameThumbnails}/>
          <Route path="/games/1" exact component={planetGuesser}/>
          <Route path="/" component={unknown}/>
        </Switch>
      )}/>
      <ReactQueryDevtools initialIsOpen/>
    </div>
      </QueryClientProvider>

  );
}

export default App;
