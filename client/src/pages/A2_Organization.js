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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      title1="기업정보" title2="조직도" // title2 수정하기
      menu1="회사소개" menu2="조직도" menu3="오시는길" 
      ></InnerMenu>
      </motion.div>

      <section className="organization">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
        <div className="cover cover1">
          <div className="organization_text empty"></div>
          <div className="organization_text organization_text1">Group</div>
          <div className="organization_text organization_text2">다양한 역량을 확보하며 꿈을 실현합니다.</div>
        </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
        <div className="cover cover2">
          <div className="organization_contentbox box1">
            <div className="organization_box mainbox">(주)거림</div>
            <div className="organization_line"></div>
            <div className="organization_box">기획본부</div>
            <div className="organization_line"></div>
            <div className="organization_box">전략1본부</div>
            <div className="organization_line"></div>
            <div className="organization_box">전략2본부</div>
            <div className="organization_line"></div>
            <div className="organization_box">전략3본부</div>
          </div>
          <div className="organization_contentbox box2">
            <div className="organization_box mainbox">(주)거림개발</div>
            <div className="organization_line"></div>
            <div className="organization_box">개발본부</div>
            <div className="organization_line"></div>
            <div className="organization_box">기획본부</div>
            <div className="organization_line"></div>
            <div className="organization_box">관리본부</div>
            <div className="organization_line"></div>
            <div className="organization_box">회계본부</div>
          </div>
          <div className="organization_contentbox box3">
            <div className="organization_box mainbox">계열사</div>
            <div className="organization_line"></div>
            <div className="organization_box">(주)나비디엔씨</div>
            <div className="organization_line"></div>
            <div className="organization_box">(주)나비산업</div>
            <div className="organization_line"></div>
            <div className="organization_box">(주)스파르타</div>
            <div className="organization_line"></div>
            <div className="organization_box">(주)NS개발</div>
          </div>
        </div>
        </motion.div>

      </section>


      {/* Footer */}
      <Footer></Footer>

    </div>

    
  );
}

export default A2_Organization;