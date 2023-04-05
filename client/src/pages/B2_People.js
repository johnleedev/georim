import React from 'react';
import '../css/A1_C3_Form.css'
import '../css/Format_basic.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import people from '../img/people.jpg'

function B2_People(props) {
  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="respect" link2="people" link3="charity"
      title1="기업목표" title2="인재양성" // title2 수정하기
      menu1="인권존중" menu2="인재양성" menu3="사회공헌"
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className="people">
        
        <div className="maincover">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <div className="cover ver_cover1">
            <div className="imagebox">
              <img src={people}/>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className="cover ver_cover2">
            <div className="textbox box1">
              <div className="text text1">함께 성장하는 기쁨</div>
              <div className="text text2">창의적이고 도덕적인 인재를 육성하고 더불어 리더십과 전문성을 강화하기 위해 아낌없이 지원합니다.</div>
            </div>
            <div className="textbox box2">
              <div className="text text1">직무 전환 기회</div>
              <div className="text text2">임직원에게 직무 전환의 기회와 교육을 제공하여 조직과 개인이 모두 윈윈(win-win)하는 효과를 추구합니다.</div>
            </div>
            <div className="textbox box3">
              <div className="text text1">역량 개발 및 직무 교육</div>
              <div className="text text2">부동산 관련 다양한 교육 및 지원을 통해 기본 지식과 비즈니스 감각을 키우며 전문가로 성장할 수 있는 기회를 제공합니다.</div>
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

export default B2_People;