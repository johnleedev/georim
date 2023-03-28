import React from 'react';
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";

function B2_People(props) {
  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="purpose" link2="people" link3="charity"
      title1="기업목표" title2="인재양성" // title2 수정하기
      menu1="인권존중" menu2="인재양성" menu3="사회공헌"
      ></InnerMenu>
      </motion.div>


      {/* Footer */}
      <Footer></Footer>

      
    </div>
  );
}

export default B2_People;