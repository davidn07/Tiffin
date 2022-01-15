import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/movies";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  );
}

export default App;
