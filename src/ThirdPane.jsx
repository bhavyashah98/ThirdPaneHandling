import { useCallback } from "react";

import { IoMdArrowBack, IoMdClose } from "react-icons/io";

import "./styles.css";

export const ThirdPane = () => {
  const onBack = useCallback(() => {
    // handle ON_BACK Action Here
  }, []);

  const onClose = useCallback(() => {
    // handle ON_CLOSE Action here
  }, []);

  return (
    <div className="pane">
      <div style={{ width: "300px" }}>
        <div
          className="justify-between items-center mx-2 z-10"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            backgroundColor: "#fff",
          }}
        >
          <div className="pane-header">
            <IoMdArrowBack onClick={onBack} className="icon" />
            <div>Third Pane Label</div>
            <IoMdClose onClick={onClose} className="icon" />
          </div>
        </div>
        <div className="pane-content">
          <p>Third Pane Description</p>
        </div>
      </div>
    </div>
  );
};
