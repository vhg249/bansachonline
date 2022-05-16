import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./shared/components/header";
import Router from "./route";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
  );
}

export default App;
