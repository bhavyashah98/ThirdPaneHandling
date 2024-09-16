import { useCallback } from "react";

import { ThirdPaneContext } from "./thirdPaneContext";

export const ThirdPaneContextProvider = ({ children }) => {
  const onAction = useCallback((action) => {
    switch (action.type) {
      case "OPEN_PANE": {
        // todo: Add Open Pane Handler
        break;
      }
      case "ON_BACK": {
        // todo: Handle back navigation
        break;
      }
      case "ON_CLOSE": {
        // todo: Add Close Pane Handler
        break;
      }
      default:
        break;
    }
  }, []);

  return (
    <ThirdPaneContext.Provider value={{}}>{children}</ThirdPaneContext.Provider>
  );
};
