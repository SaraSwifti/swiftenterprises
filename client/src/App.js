import React from "react";
import { Route, Routes } from "react-router-dom";


import Header from "./components/Header/Header";
// import BgImage from "./images/Researchimg/labphoto.jpg";


import Footer from "./components/Footer/Footer";
import InvestorSignIn from "./pages/InvestorSignIn/InvestorSignIn.js";
import Dircell from "./pages/Dircell/Dircell.js";
import RenewFuel from "./pages/Renewfuel/Renewfuel.js";
import Research from "./pages/Research/Research.js";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy.js";
import InvestorPage from "./pages/InvestorPage/InvestorPage.js";
import ReportUpLoad from "./pages/ReportUpLoad/ReportUpLoad";
import RusekPage from "./pages/RusekPage/RusekPage";

// to go inside of the routerbelow
 

function App() {
  return (
    
    <>
      <div className="flex flex-col min-h-screen bg-white">
     
      <Header />
     
       <div className="pb-20">
         
        <Routes >

          <Route exact path="/" element={<About />} />
          <Route exact path="/directcells" element={<Dircell /> } />
          <Route exact path="/renewablefuel" element={<RenewFuel />}  />
          <Route exact path="/research" element={<Research />} />
          <Route exact path="/investorsignin" element={<InvestorSignIn />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/rusekpage" element={<RusekPage />} />
          <Route exact Path="/investorpage" element={<InvestorPage />} />
          <Route exact Path="/reportupload" element={<ReportUpLoad />} />
        
         
         </Routes>
      </div>
    
        < Footer />
     </div>
     </>
    
  )
}


export default App;