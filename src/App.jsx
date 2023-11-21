//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//FIGMA DESIGNS
import { LandingPage } from "./Designs/LandingPage";
import { Home } from "./Designs/Home";
import { AllItemsPage } from "./Designs/AllItemsPage";
import { AddFormPage } from "./Designs/AddFormPage";
import { EditFormPage } from "./Designs/EditFormPage";
// import { TwitterPage } from "./Designs/TwitterPage";
import { GrubFinderPage } from "./Designs/GrubFinderPage";
import { FourOFourPage } from "./Designs/FourOFourPage";


// //PAGES
// import Home from "./Pages/Home";
// import Show from "./Pages/Show";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";

//COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menuItems" element={<AllItemsPage />} />
            <Route path="/menuItems/new" element={<AddFormPage />} />
            {/* <Route exact path="/menuItems/:id" element={< />} /> */}
            <Route path="/menuItems/:id/edit" element={<EditFormPage />} />
            {/* <Route path="/menuItems/:id/tweets" element={<TwitterPage />} /> */}
            <Route path="/menuItems/:id/grubposts" element={<GrubFinderPage />} />
            <Route path="*" element={<FourOFourPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App;
