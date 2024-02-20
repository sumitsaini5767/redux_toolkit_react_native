import { Provider } from "react-redux";
import { Store } from "./src/Redux/Store";
import Routes from "./src/navigations/Routes";

export default function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}
