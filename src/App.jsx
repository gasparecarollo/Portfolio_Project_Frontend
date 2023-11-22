//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// //FIGMA DESIGNS
// import { LandingPage } from "./Designs/LandingPage";
// import { Home } from "./Designs/Home";
// import { AllItemsPage } from "./Designs/AllItemsPage";
// import { AddFormPage } from "./Designs/AddFormPage";
// import { EditFormPage } from "./Designs/EditFormPage";
// import MenuItem from "./Components/MenuItem";
// // import { TwitterPage } from "./Designs/TwitterPage";
// import { GrubFinderPage } from "./Designs/GrubFinderPage";
// import { FourOFourPage } from "./Designs/FourOFourPage";


//PAGES
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import LandPage from "./Pages/LandingPage";

//COMPONENTS
import NavBar from "./Components/NavBar";
import MenuItemsDetails from "./Components/MenuItemsDetails";
import MenuItems from "./Components/MenuItems";
import MenuItenEditForm from "./Components/MenuItemEditForm";
import MenuItem from "./Components/MenuItem";


function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menuitems" element={<Index />} />
            <Route path="/menuitems/new" element={<New />} />
            <Route exact path="/menuitems/:id" element={< Show />} />
            <Route path="/menuitems/:id/edit" element={<Edit />} />
            {/* <Route path="/menuItems/:id/tweets" element={<TwitterPage />} /> */}
            {/* <Route path="/menuitems/:id/grubposts" element={<GrubFinderPage />} /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App;
