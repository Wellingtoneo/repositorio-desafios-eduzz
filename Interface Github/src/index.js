import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Providers from "./providers";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Providers />
  </StrictMode>,
  rootElement
);
