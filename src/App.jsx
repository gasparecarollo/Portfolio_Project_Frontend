//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//FIGMA DESIGNS
import { LandingPage } from "./Designs/LandingPage";
import { Home } from "./Designs/Home";
import { AlIItemsPage } from "./Designs/AllItemsPage";
import { AddFormPage } from "./Designs/AddFormPage";
import { EditFormPage } from "./Designs/EditFormPage";
import { TwitterPage } from "./Designs/TwitterPage";
import { GrubFinderPage } from "./Designs/GrubFinderPage";


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
            <Route path="/" element={<LandingPage />} />
            <Route path="/menuItems" element={<Index />} />
            <Route path="/menuItems/new" element={<AddFormPage />} />
            <Route exact path="/menuItems/:id" element={<Show />} />
            <Route path="/menuItems/:id/edit" element={<EditFormPage />} />
            <Route path="/menuItems/:id/tweets" element={<TwitterPage />} />
            <Route path="/menuItems/:id/grubposts" element={<GrubFinderPage />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App;
