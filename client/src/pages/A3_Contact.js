import React from 'react';
import '../css/A3_contact.css';
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import map from '../img/map.png';
import kakaomap from '../img/kakaomap.png';
import navermap from '../img/navermap.png';
import title3 from '../img/title3.png'
import sevenlogo from '../img/sevenlogo.png'

function A3_Contact(props) {
  return (
    <div>
      
      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="info" link2="organization" link3="contact"
      title1="기업정보" title2="오시는길" // title2 수정하기
      menu1="회사소개" menu2="조직도" menu3="오시는길" 
      ></InnerMenu>
      </motion.div>

      
      {/* Content */}
      <div className="contact">

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
      </div>
      

      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}

export default A3_Contact;