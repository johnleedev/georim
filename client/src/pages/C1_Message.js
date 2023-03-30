import React from 'react';
import '../css/C1_message.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import message from '../img/message.jpg'

function C1_Message(props) {
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
              <div className="text text1">드림 활동</div>
              <div className="text text2">국가적 위기 극복에 항상 함께하며 복지 사각지대의 취약계층을</div>
              <div className="text text2">위한 정기적인 지원 사업 및 국내·외 봉사활동을 실시하고 있습니다.</div>
            </div>
            <div className="textbox box2">
              <div className="text text1">후원 활동</div>
              <div className="text text2">빈곤과 질병으로 고통받는 아동과 청소년들을 위해 </div>
              <div className="text text2">다양한 사회복지 재단을 후원하며 아동 권리 옹호 활동을 이어가고 있습니다.</div>
            </div>
            <div className="textbox box3">
              <div className="text images">
             
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