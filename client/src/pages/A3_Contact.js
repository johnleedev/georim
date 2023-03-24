import React from 'react';
import '../css/A3_contact.css'
import Header from '../components/Haeder'
import Footer from '../components/Footer'
import InnerMenu from '../components/InnerMenu'

import { motion } from "framer-motion";

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

      {/* Content */}
{/* 
      <div className="contact">

        <div className='contact_box1'>
        </div>
        <div className='contact_box2'>
          <div className='contact_map_wrap'>
            <div className='contact_map_content content_left'>
              
            </div>
            <div className='contact_map_content content_right'>
              <div className='contact_map_button_wrap'>
                <a href='http://kko.to/grd7mhG67J' target="_blank">
                  <div className='contact_map_button btn1'>
                    <img src='img/kakaomap.png'></img>
                    <span>카카오맵</span>
                  </div>
                </a>
                <a href='https://naver.me/x6U333IS' target="_blank">
                  <div className='contact_map_button btn2'>
                    <img src='img/navermap.png'></img>
                    <span>네이버지도</span>
                  </div>
                </a>
              </div>
              <div  className='contact_map_notice_wrap'>
                <div className='contact_map_notice'>
                  <div className='contact_map_notice_name'>하늘뷰티</div>
                  <div className='contact_map_notice_text'>대구 동구 서호동 90-5</div>
                </div>
                <div className='contact_map_notice'>
                  <div className='contact_map_notice_name'>연락처</div>
                  <div className='contact_map_notice_text'>010-4925-8855</div>
                </div>
                <div className='contact_map_notice'>
                  <div className='contact_map_notice_name'>영업시간</div>
                  <div className='contact_map_notice_text'> 제품상담 : 카톡 - 상시 / 전화 - 10시~21시</div>
                  <div className='contact_map_notice_text'> 택배마감 : 월~금 4시</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>


      </div> */}

      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}

export default A3_Contact;