
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout/>}></Route>
          </Routes>
      </Router>
  )
}

export default App
