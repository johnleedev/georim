import React from 'react';
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import '../css/prepare.css'
import prepare2 from '../img/prepare2.png'

function D2_Distribution(props) {
  return (
    <div>

      
      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="development" link2="distribution" link3="news"
      title1="기업활동" title2="분양·입주" // title2 수정하기
      menu1="개발·시행" menu2="분양·입주" menu3="뉴스·비디오" 
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className='prepare_content'>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>        
        <div className='prepare_content_cover1'>
          <img src={prepare2} />
        </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>        
        <div className='prepare_content_cover2'>
          <span>서비스 준비중 입니다.</span>
          <p>현재 서비스 제공을 위하여 페이지 준비중에 있습니다.</p>
          <p>감사합니다.</p>
        </div>
        </motion.div>

      </section>



      {/* Footer */}
      <Footer></Footer>

      
    </div>
  );
}

export default D2_Distribution;