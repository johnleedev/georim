import './App.css';
import './css/reset.css';
import { React } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Main from './pages/Main';
import A1_CompanyInfo from './pages/A1_CompanyInfo';
import A2_Organization from './pages/A2_Organization';
import A3_Contact from './pages/A3_Contact';
import B1_Respect from './pages/B1_Respect';
import B2_People from './pages/B2_People';
import B3_Chrity from './pages/B3_Charity';
import C1_Message from './pages/C1_Message';
import C2_Obligation from './pages/C2_Obligation';
import C3_Ethics from './pages/C3_Ethics';
import D1_Development from './pages/D1_Development';
import D2_Distribution from './pages/D2_Distribution';
import D3_News from './pages/D3_News';
import E1_Add_cor from './pages/E1_Add_cor';
import E2_Add_per from './pages/E2_Add_per';
import E3_Add_priv from './pages/E3_Add_priv';


function App() {
  return (
    <div className="App">
      <AnimatePresence>
        
        <Routes>
          <Route path="/" element={<Main></Main>}/>

          <Route path="/info" element={<A1_CompanyInfo></A1_CompanyInfo>}/>
          <Route path="/organization" element={<A2_Organization></A2_Organization>}/>
          <Route path="/contact" element={<A3_Contact></A3_Contact>}/>

          <Route path="/respect" element={<B1_Respect></B1_Respect>}/>
          <Route path="/people" element={<B2_People></B2_People>}/>
          <Route path="/charity" element={<B3_Chrity></B3_Chrity>}/>

          <Route path="/message" element={<C1_Message></C1_Message>}/>
          <Route path="/obligation" element={<C2_Obligation></C2_Obligation>}/>
          <Route path="/ethics" element={<C3_Ethics></C3_Ethics>}/>

          <Route path="/development" element={<D1_Development></D1_Development>}/>
          <Route path="/distribution" element={<D2_Distribution></D2_Distribution>}/>
          <Route path="/news" element={<D3_News></D3_News>}/>
         
          <Route path="/addcor" element={<E1_Add_cor></E1_Add_cor>}/>
          <Route path="/addper" element={<E2_Add_per></E2_Add_per>}/>
          <Route path="/addpriv" element={<E3_Add_priv></E3_Add_priv>}/>

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
