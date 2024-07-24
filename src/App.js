
import './App.css';
import TodoWrapper from './Component/todoWrapper'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <TodoWrapper />
    </div>
  );
}

export default App;
