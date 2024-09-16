import { useContext, createContext } from "react";

const ThirdPaneContext = createContext({});

export const useThirdPaneContext = () => useContext(ThirdPaneContext);

export { ThirdPaneContext };
