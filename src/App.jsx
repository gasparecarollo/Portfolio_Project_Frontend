//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

//COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menuItems" element={<Index />} />
            <Route path="/menuItems/new" element={<New />} />
            <Route exact path="/menuItems/:id" element={<Show />} />
            <Route path="/menuItems/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App;
