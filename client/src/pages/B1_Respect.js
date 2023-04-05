import React from 'react';
import '../css/A1_C3_Form.css'
import '../css/Format_basic.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import purpose from '../img/purpose.jpg'

function B1_Respect(props) {
  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="respect" link2="people" link3="charity"
      title1="기업목표" title2="인권존중" // title2 수정하기
      menu1="인권존중" menu2="인재양성" menu3="사회공헌" 
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className="respect">

        <div className="maincover">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <div className="cover ver_cover1">
            <div className="imagebox">
              <img src={purpose}/>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className="cover ver_cover2">
            <div className="textbox box1">
              <div className="text text1">상호존중</div>
              <div className="text text2">직무와 직급에 따라 차별이 발생하지 않도록 수평적으로 소통하며 서로 신뢰하는 문화를 추구합니다.</div>
            </div>
            <div className="textbox box2">
              <div className="text text1">일과 삶의 균형</div>
              <div className="text text2">직무별 특성을 고려한 유연하고 효율적인 근무 제도를 지속적으로 확대 도입하여 개인의 상황에 따라 탄력적으로 운영합니다.</div>
            </div>
            <div className="textbox box3">
              <div className="text text1">지속적인 개선</div>
              <div className="text text2">임직원 인터뷰 및 설문 등을 통해 문제점을 파악하고 함께 조직문화 개선안을 마련하고 지속적으로 지원합니다.</div>
            </div>
          </div>
          </motion.div>
        </div>

      </section>


      {/* Footer */}
      <Footer></Footer>
      
    </div>
  );
}

export default B1_Respect;