import React from 'react';
import '../css/B1_C3_Form.css'
import '../css/Format_basic.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import message from '../img/message.jpg'
import motto1 from '../img/motto1.png'
import motto2 from '../img/motto2.png'
import motto3 from '../img/motto3.png'

function C1_Message(props) {
  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="message" link2="obligation" link3="ethics"
      title1="기업신념" title2="리더메시지" // title2 수정하기
      menu1="리더메시지" menu2="사회적책임" menu3="윤리경영" 
      ></InnerMenu>
      </motion.div>


      
      {/* Content */}

      <section className="message">
        
        <div className="maincover">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <div className="cover ver_cover1">
            <div className="imagebox">
              <img src={message}/>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className="cover ver_cover2">
            <div className="textbox box1">
              <div className="img img1">
                <img src={motto1}/>
              </div>
              <div className="img img2">
                <img src={motto2}/>
              </div>
            </div>
            <div className="textbox box2">
              <div className="text text1">CEO 인사말</div>
              <div className="text text2">한결같이 고품질의 부동산 종합 서비스를 제공하여 다양한 프로젝트에서 성공적인 결과로 성실성과 실적의 우수성을 인정받아 공신력 있는 기업으로 성장하고 있습니다.</div>
            </div>
            <div className="textbox box3">
              <div className="text text2">부동산 변화를 가장 빠르게 감지하고 한발 앞서 고객의 니즈를 파악하여 충족시킬 수 있는 믿음직한 회사, 지혜로운 회사, 책임을 다하는 회사로 혁신적인 전략으로 최고의 결과를 약속드립니다.</div>             
            </div>
            <div className="textbox box4">
              <div className="img img3">
                대표이사
                <img src={motto3}/>
              </div>
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

export default C1_Message;