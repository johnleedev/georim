import React from 'react';
import '../css/A3_contact.css';
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import map from '../img/map.png';
import kakaomap from '../img/kakaomap.png';
import navermap from '../img/navermap.png';

function A3_Contact(props) {
  return (
    <div>
      
      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      title1="기업정보" title2="오시는길" // title2 수정하기
      menu1="회사소개" menu2="조직도" menu3="오시는길" 
      ></InnerMenu>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
      {/* Content */}
      <div className="contact">

        <div className='contact_box1'>
        </div>
        <div className='contact_box2'>
          <div className='contact_map_wrap'>


            <div className='contact_map_content content_left'>
              <img src={map}/>
            </div>


            <div className='contact_map_content content_right'>
              <div className='contact_map_button_wrap'>
                <a href='https://naver.me/F5FpcMbA' target="_blank">
                  <div className='contact_map_button btn2'>
                    <img src={navermap}/>
                    <span>네이버지도</span>
                  </div>
                </a>
                <a href='http://kko.to/lF3JV7IFj8' target="_blank">
                  <div className='contact_map_button btn1'>
                    <img src={kakaomap}/>
                    <span>카카오맵</span>
                  </div>
                </a>
              </div>
              <div  className='contact_map_notice_wrap'>
                <div className='contact_map_notice'>
                  <div className='contact_map_notice_name'>ADDRESS</div>
                  <div className='contact_map_notice_text'>대구 수성구 청수로 26길 46</div>
                </div>
                <div className='contact_map_notice'>
                  <div className='contact_map_notice_name'>CONTACT</div>
                  <div className='contact_map_notice_text'>1577-7493</div>
                </div>
                <div className='contact_map_notice'>
                  <div className='contact_map_notice_name'>SUBWAY</div>
                  <div className='contact_map_notice_text'>대구3호선 황금역 1번출구에서 395m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}

export default A3_Contact;