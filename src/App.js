import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./shared/components/header";
import Router from "./route";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <ToastContainer position="top-right" autoClose={1000} theme="colored" />
    </BrowserRouter>
  );
}

export default App;
