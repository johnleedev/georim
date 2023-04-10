import React from 'react';
import '../css/A2_organization.css'
import Header from '../components/Haeder'
import Footer from '../components/Footer'
import InnerMenu from '../components/InnerMenu'
import { motion } from "framer-motion";

function A2_Organization(props) {
  return (

    <div>

      {/* Haeder */}
      <Header></Header>

      {/* InnerMenu */}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="info" link2="organization" link3="contact"
      title1="기업정보" title2="조직도" // title2 수정하기
      menu1="회사소개" menu2="조직도" menu3="오시는길" 
      ></InnerMenu>
      </motion.div>


      {/* Content */}

      {/* <section className="organization">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
        <div className="cover cover1">
          <div className="emptybox"></div>
          <div className="titlebox">Group</div>
        </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
        <div className="cover cover2">
          <div className="textbox">다양한 역량을 확보하며 꿈을 실현합니다.</div>
        </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
        <div className="cover cover3">
          <div className="cover">
            <div className="contentbox box1">
              <div className="box mainbox">(주)거림</div>
              <div className="line"></div>
              <div className="box">기획본부</div>
              <div className="line"></div>
              <div className="box">전략1본부</div>
              <div className="line"></div>
              <div className="box">전략2본부</div>
              <div className="line"></div>
              <div className="box">전략3본부</div>
            </div>
            <div className="contentbox box2">
              <div className="box mainbox">(주)거림개발</div>
              <div className="line"></div>
              <div className="box">개발본부</div>
              <div className="line"></div>
              <div className="box">기획본부</div>
              <div className="line"></div>
              <div className="box">관리본부</div>
              <div className="line"></div>
              <div className="box">회계본부</div>
            </div>
            <div className="contentbox box3">
              <div className="box mainbox">계열사</div>
              <div className="line"></div>
              <div className="box">(주)나비디엔씨</div>
              <div className="line"></div>
              <div className="box">(주)나비산업</div>
              
            </div>
          </div>
        </div>
        </motion.div>

      </section> */}


      {/* Footer */}
      <Footer></Footer>

    </div>

    
  );
}

export default A2_Organization;