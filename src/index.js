import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import './index.css';

console.log("check local commit")

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);