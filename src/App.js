import './App.css';
import Main from './Main';
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
