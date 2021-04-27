import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />

      {/* <Homepage />
      <HatsPage /> */}
    </div>
  );
}

export default App;
