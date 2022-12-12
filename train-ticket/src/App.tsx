import { Main } from "./views/main";
import { routes } from "./router/index.js";
import { useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes_form = useRoutes(routes);
  return <div className="App">{routes_form}</div>;
}

export default App;
