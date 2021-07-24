import logo from "./logo.svg";
import "./App.css";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Auth from "./components/Auth";
import Registration from "./components/Registration";
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="forms">
          <AuthContainer />
          <RegistrationContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
