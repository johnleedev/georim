import React from 'react';
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";

function C1_massege(props) {
  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="massege" link2="obligation" link3="ethics"
      title1="기업신념" title2="리더메시지" // title2 수정하기
      menu1="리더메시지" menu2="사회적책임" menu3="윤리경영" 
      ></InnerMenu>
      </motion.div>


      {/* Footer */}
      <Footer></Footer>
      
    </div>
  );
}

export default C1_massege;