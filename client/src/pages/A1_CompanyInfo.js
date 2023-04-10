import React from 'react';
import '../css/A1_C3_Form.css'
import '../css/Format_basic.css'
import Header from '../components/Haeder'
import Footer from '../components/Footer'
import InnerMenu from '../components/InnerMenu'
import { motion } from "framer-motion";
import companyinfo from '../img/companyinfo.jpg'
import map from '../img/map.png';
import kakaomap from '../img/kakaomap.png';
import navermap from '../img/navermap.png';
import title3 from '../img/title3.png'
import sevenlogo from '../img/sevenlogo.png'

function A1_CompanyInfo(props) {

  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="info" link2="organization" link3="contact"
      title1="기업정보" title2="회사소개" // title2 수정하기
      menu1="회사소개" menu2="조직도" menu3="오시는길" 
      ></InnerMenu>
      </motion.div>


      {/* Content */}
      
      {/* companyinfo ----------------------------------------------------------------------- */}

      <section className="companyinfo">
              
        <div className="maincover">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <div className="cover ver_cover1">
            <div className="imagebox">
              <img src={companyinfo}/>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className="cover ver_cover2">
            <div className="textbox box1">
              <div className="text text1">안녕하십니까?</div>
              <div className="text text1">거림에 오신 것을 진심으로 환영합니다.</div>
            </div>
            <div className="textbox box2">
            <div className="text text2">거림은 종합 부동산 기업으로 <span>개발·시행·분양·입주·임대·중개·시장분석</span> 등 부동산과 관련된 전반적인 서비스를 제공하고 있습니다.</div>
            </div>
            <div className="textbox box3">
              <div className="text text2">거림은 사업자·근로자·수요자 모두의 성공을 목표로 과업에 몰입합니다.</div>
              <div className="text text2">거림은 하나의 프로젝트가 얼마나 많은 시간과 정성이 담기는지 알고 있습니다.</div>
              <div className="text text2">거림은 프로젝트의 성공을 가장 열망하는 파트너로 열정을 다해 일할 것입니다.</div>
              <div className="text text2">거림만의 경험으로 대한민국의 부동산 산업의 지속적인 성장을 이끌어 내겠습니다.</div>
              <div className="text text2">거림은 신의를 지키며 최고의 결과로 보답하겠습니다.</div>
              <div className="text text2">감사합니다.</div>
            </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* organization ----------------------------------------------------------------------- */}
      
      <section className="organization">
        
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
              {/* <div className="line"></div>
              <div className="box">(주)스파르타</div>
              <div className="line"></div>
              <div className="box">(주)NS개발</div> */}
            </div>
          </div>
        </div>
        </motion.div>

      </section>


      {/* contact ----------------------------------------------------------------------- */}
      
      <section className="contact">

        <div className='box1'>

        </div>
        <div className='box2'>
          <div className='wrap'>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <div className='content left'>
              <img src={map}/>
            </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <div className='content right'>
              <div className='notice_wrap title'>
                <img src={title3}/>
              </div>
              <div className='notice_wrap textbox'>
                <div className='notice'>
                  <div className='notice_name'>ADDRESS</div>
                  <div className='notice_text'>대구 수성구 청수로 26길 46</div>
                  <div className='notice_text seven'><img src={sevenlogo}/>1층 세븐일레븐 N플레이스빌딩 / 주차: 건물 서측 지하1~2층</div>
                </div>
                <div className='notice'>
                  <a href='tel:1577-7493'>
                  <div className='notice_name'>CONTACT</div>
                  <div className='notice_text tel'>1577-7493</div>
                  <div className='notice_text'>09:30 ~ 18:00</div>
                  </a>
                </div>
              </div>
              <div className='button_wrap'>
                <a href='https://naver.me/F5FpcMbA' target="_blank">
                  <div className='button btn2'>
                    <img src={navermap}/>
                    <span>네이버지도</span>
                  </div>
                </a>
                <a href='http://kko.to/lF3JV7IFj8' target="_blank">
                  <div className='button btn1'>
                    <img src={kakaomap}/>
                    <span>카카오맵</span>
                  </div>
                </a>
              </div>
            </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}

export default A1_CompanyInfo;