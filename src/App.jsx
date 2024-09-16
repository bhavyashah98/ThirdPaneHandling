import "./styles.css";

import { ThirdPane } from "./ThirdPane";
import { ThirdPaneContextProvider } from "./ThirdPaneContextProvider";
import OptionsComponent from "./OptionsComponent";

export default function App() {
  return (
    <ThirdPaneContextProvider>
      <div className="app">
        <OptionsComponent />
        <ThirdPane />
      </div>
    </ThirdPaneContextProvider>
  );
}
