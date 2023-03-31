import React from 'react';
import '../css/B1_C3_Form.css'
import '../css/Format_basic.css'
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import obligation from '../img/obligation.jpg'

function C2_obligation(props) {
  return (
    <div>

       {/* Haeder */}
       <Header></Header>


        {/* InnerMenu */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
        <InnerMenu 
        link1="message" link2="obligation" link3="ethics"
        title1="기업신념" title2="사회적책임" // title2 수정하기
        menu1="리더메시지" menu2="사회적책임" menu3="윤리경영" 
        ></InnerMenu>
        </motion.div>


        
        {/* Content */}

        <section className="obligation">
          
          <div className="maincover">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <div className="cover ver_cover1">
              <div className="imagebox">
                <img src={obligation}/>
              </div>
            </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <div className="cover ver_cover2">
              <div className="textbox box1">
                <div className="text text1">사회적 책임</div>
                <div className="text text2">기업 활동에 의해 영향을 받거나 영향을 주는 직·간접적 이해관계자들에 대하여 발생 가능한 제반 이슈들에 대해 법적, 경제적, 윤리적 책임을 감당할 뿐 아니라, 기업의 리스크를 줄이고 기회를 포착하여 중·장기적 기업가치를 제고할 수 있도록 추진합니다.</div>
              </div>
              <div className="textbox box2">
                <div className="text text1">공정채용</div>
                <div className="text text2">역사적으로 수많은 차별 요소가 있었고 우리는 근로자를 모집하거나 채용할 때에 인종, 성, 장애, 나이, 지역 등의 기준이 채용함에 차별이 발생하지 않도록 합니다.</div>
              </div>
              <div className="textbox box3">
                <div className="text text1">환경보호</div>
                <div className="text text2">플라스틱 사용을 줄이고 대체재·재사용을 권장하며 사회 구성원들이 가장 주목하는 환경 이슈에 집중하여 사업장별 가장 최적화된 에너지 절약을 실천합니다.</div>
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

export default C2_obligation;