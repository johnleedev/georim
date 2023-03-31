import React from 'react';
import '../css/Format_basic.css'
import '../css/B1_C3_Form.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import ethics from '../img/ethics.jpg'

function C3_Ethics(props) {
  return (
    <div>

       {/* Haeder */}
       <Header></Header>


        {/* InnerMenu */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
        <InnerMenu 
        link1="message" link2="obligation" link3="ethics"
        title1="기업신념" title2="윤리경영" // title2 수정하기
        menu1="리더메시지" menu2="사회적책임" menu3="윤리경영" 
        ></InnerMenu>
        </motion.div>

        {/* Content */}

        <section className="ethics">
          
          <div className="maincover">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <div className="cover ver_cover1">
              <div className="imagebox">
                <img src={ethics}/>
              </div>
            </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <div className="cover ver_cover2">
              <div className="textbox box1">
                <div className="text text1">법과 윤리 준수</div>
                <div className="text text2">공정하고 투명한 경영을 위해 합법적이고 윤리적인 방식으로 사업을 수행하여 사회적 책임을 다하고 깨끗한 조직문화를 만들어 나가고 있습니다.</div>
              </div>
              <div className="textbox box2">
                <div className="text text1">무관용 원칙</div>
                <div className="text text2">부패 및 뇌물에 대한 무관용 원칙을 고수하며, 부패 행위에 대해 고의적으로 묵인하거나 간과하지 않습니다.</div>
              </div>
              <div className="textbox box3">
                <div className="text text1">정확한 기록</div>
                <div className="text text2">조직이 지출하는 모든 비용에 대해 회계 장부 및 관련 서류에 철저하게 기록합니다. 어떠한 목적이든 비밀 계정 또는 기록되지 않는 사내 자금을 확보하거나, 회계 장부 및 관련 서류에 허위·불완전·부정확한 정보를 포함하는 행위는 일체 금지됩니다.</div>
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

export default C3_Ethics;