import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import '../css/D1_D3_Form.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function D1_Development(props) {

  useEffect(()=> {
    const user = navigator.userAgent;
    if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 
    || user.indexOf("iPad") > -1  || user.indexOf("iPod") > -1 ) {
        setPerView('1')
    } else {
      window.addEventListener(`resize`, function(){
        if (1200 < window.innerWidth) {
          setPerView('3')
        } else if (768 < window.innerWidth < 1200) {
          setPerView('2')
        } else if (0 < window.innerWidth < 768) {
          setPerView('1')
        }
      });
    }
    
  }, []);

  let state = useSelector((state) => { return state } )
  let [perView, setPerView] = useState('3')

  return (
    <div>

      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
      link1="development" link2="distribution" link3="news"
      title1="기업활동" title2="개발·시행" // title2 수정하기
      menu1="개발·시행" menu2="분양·입주" menu3="뉴스·비디오" 
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className='dev'>
         
        <div className='main_box1'>
          <div className='text'>총 개발·시행 사업 {state.develop.length}건</div>
          <div className='bar'></div>
        </div>

        <Swiper 
          modules={[Pagination, Navigation, Autoplay]}
          autoplay = {{ delay : 1000, disableOnInteraction: false, pauseOnMouseEnter: true}}
          slidesPerView={perView}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{ type: "fraction"}}
          navigation={true}
          
          className="swiper"
        >
          {
            state.develop.map((a, i)=>{
              return (
                <SwiperSlide className="slide">
                  <div className="content">
                    <div className="img"><img src={`${state.develop[i].img}`}></img></div>
                    <div className="text">
                      <div className="title">{state.develop[i].name}</div>
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
                          <div>{state.develop[i].주소}</div>
                          <div>{state.develop[i].구분}</div>
                          <div>{state.develop[i].호실수}</div>
                          <div>{state.develop[i].규모}</div>
                          <div>{state.develop[i].준공시기}</div>
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

export default D1_Development;


