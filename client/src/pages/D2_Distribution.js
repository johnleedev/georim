import React, { useRef, useState } from "react";
import { useSelector } from "react-redux"
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import '../css/D1_D3_Form.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function D2_Distribution(props) {

  let state = useSelector((state) => { return state } )

  return (
    <div>

      
      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="development" link2="distribution" link3="news"
      title1="기업활동" title2="분양·입주" // title2 수정하기
      menu1="개발·시행" menu2="분양·입주" menu3="뉴스·비디오" 
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className='distri'>
         
        <div className='main_box1'>
          <div className='text'>총 분양·입주 사업 {state.distri.length}건</div>
          <div className='bar'></div>
        </div>

        <Swiper 
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{ type: "fraction"}}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          {
            state.distri.map((a, i)=>{
              return (
                <SwiperSlide className="slide">
                  <div className="content">
                    <div className="img"><img src={`${state.distri[i].img}`}></img></div>
                    <div className="text">
                      <div className="title">{state.distri[i].name}</div>
                      <div className="textbox">
                        <div className="textbox1 boxes">
                          <div className="letter2">주      소</div>
                          <div className="letter2">구      분</div>
                          <div className="letter3">세   대   수</div>
                          <div className="letter2">규      모</div>
                          <div>사업시기</div>
                        </div>
                        <div className="textbox2 boxes">
                          <div>:</div>
                          <div>:</div>
                          <div>:</div>
                          <div>:</div>
                          <div>:</div>
                        </div>
                        <div className="textbox3 boxes">
                          <div>{state.distri[i].주소}</div>
                          <div>{state.distri[i].구분}</div>
                          <div>{state.distri[i].세대수}</div>
                          <div>{state.distri[i].규모}</div>
                          <div>{state.distri[i].사업시기}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

      </section>

      {/* Footer */}
      <Footer></Footer>

      
    </div>
  );
}

export default D2_Distribution;