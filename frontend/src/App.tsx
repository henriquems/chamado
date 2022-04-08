import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from "Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
        <Routes />
        <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
