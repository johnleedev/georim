import React from 'react';
import '../css/B3_charity.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import charity from '../img/charity.jpg'
import charity1 from '../img/charity1.png'
import charity2 from '../img/charity2.png'
import charity3 from '../img/charity3.png'
import charity4 from '../img/charity4.png'



function B3_Charity(props) {
  return (
    <div>
      
      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="purpose" link2="people" link3="charity"
      title1="기업목표" title2="사회공헌" // title2 수정하기
      menu1="인권존중" menu2="인재양성" menu3="사회공헌"
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className="charity">
        
        <div className="maincover">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <div className="cover ver_cover1">
            <div className="imagebox">
              <img src={charity}/>
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
                <img src={charity1}/>
                <img src={charity2}/>
                <img src={charity3}/>
                <img src={charity4}/>
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

export default B3_Charity;