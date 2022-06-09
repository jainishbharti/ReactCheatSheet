import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { UserContainer } from "./components/UserContainer";
// import { WrappedComponent } from "./components/IceCreamContainer";
// import { HooksCakeContainer } from "./components/HooksCakeContainer";
// import { HooksIceCreamContainer } from "./components/HooksIceCreamContainer";
// import { WrappedComponent } from "./components/CakeContainer";
// import { ItemContainer } from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer /> */}
        {/* <WrappedComponent /> */}
        {/* <WrappedComponent /> */}
        {/* <HooksCakeContainer /> */}
        {/* <HooksIceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
