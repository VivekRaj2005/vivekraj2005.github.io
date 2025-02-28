import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { Scrollbars } from "rc-scrollbars";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Scrollbars style={{ height: "100vh", width: "100vw" }} autoHide hideTracksWhenNotNeeded>
      <Router />
    </Scrollbars>
  </StrictMode>
);
