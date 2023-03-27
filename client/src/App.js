import './App.css';
import './css/reset.css';
import { React } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Main from './pages/Main';
import A1_CompanyInfo from './pages/A1_CompanyInfo';
import A2_Organization from './pages/A2_Organization';
import A3_Contact from './pages/A3_Contact';
import B1_Purpose from './pages/B1_Purpose';
import B2_People from './pages/B2_People';
import B3_Chrity from './pages/B3_Charity';


function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main></Main>}/>

          <Route path="/info" element={<A1_CompanyInfo></A1_CompanyInfo>}/>
          <Route path="/organization" element={<A2_Organization></A2_Organization>}/>
          <Route path="/contact" element={<A3_Contact></A3_Contact>}/>

          <Route path="/purpose" element={<B1_Purpose></B1_Purpose>}/>
          <Route path="/people" element={<B2_People></B2_People>}/>
          <Route path="/charity" element={<B3_Chrity></B3_Chrity>}/>

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
