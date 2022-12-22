import { routes } from "./router/index.js";
import { useRoutes } from "react-router";

function App() {
  const routes_form = useRoutes(routes);
  return <div className="App">{routes_form}</div>;
}

export default App;
