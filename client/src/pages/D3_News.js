import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import Header from '../components/Haeder';
import Footer from '../components/Footer';
import InnerMenu from '../components/InnerMenu';
import { motion } from "framer-motion";
import '../css/D1_D3_Form.css'
import '../css/D3_news.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import news1 from '../img/news1.jpg'
import ReactPlayer from 'react-player'

function D3_News(props) {

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

  let [perView, setPerView] = useState('3')


  return (
    <div>

      
      {/* Haeder */}
      <Header></Header>


      {/* InnerMenu */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
      <InnerMenu 
       link1="development" link2="distribution" link3="news"
       title1="기업활동" title2="뉴스·비디오" // title2 수정하기
       menu1="개발·시행" menu2="분양·입주" menu3="뉴스·비디오" 
      ></InnerMenu>
      </motion.div>

      {/* Content */}

      <section className='news'>
         
        <div className='main_box1'>
          <div className='text'>News</div>
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
          <SwiperSlide className="slide">
            <div className="content">
              <div className="img">
                <img src={news1}/>
              </div>
              <div className="text">
                <div className="main">
                초록우산 어린이재단 그린리더클럽 그린리더 30호 곽동휴 대표 위촉
                </div>
                <div className="bar"></div>
                <div className="context">
                초록우산 어린이재단은 주식회사 거림 곽동휴 대표를 그린리더 30호로 위촉했다.
                <br></br><br></br>그린리더클럽은 초록우산 어린이재단의 중‧고액 후원자 모임으로 대구지역 나눔 문화 확산과 더불어 아동 복지 시설을 지원하기 위한 젊은 후원자들의 모임으로 구성되어 있다. 위촉된 그린리더는 아동들의 목소리를 대변하는 아동옹호활동과 어린이재단의 사업 지원, 후원자 개발 등 다양한 활동에 참여한다.
                <br></br><br></br>30호 그린리더로 위촉된 주식회사 거림 곽동휴 대표는 "앞으로 대구지역 아동들을 돕는데 적극적으로 함께 할 수 있도록 노력하겠다"고 소감을 밝혔다.
                </div>
                <div className="link">
                  <a href="https://news.imaeil.com/page/view/2023020809480242448" target='_blank'>
                  초록우산 어린이재단 그린리더클럽 그린리더 30호 곽동휴 대표 위촉 - 매일신문. 23.02.08
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <div className='main_box1'>
          <div className='text'>Youtube</div>
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
          <SwiperSlide className="slide youtube_cov">
            <div className="content">
              <div className="youtube">
                <ReactPlayer 
                className="react-player" 
                url="https://www.youtube.com/watch?v=NAUawPmT3uE" 
                width="100%" height="100%" 
                muted={true} playing={true} loop={true} showinfo='0' modestbranding={0} fs={0}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}/>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
 
       </section>


      {/* Footer */}
      <Footer></Footer>

      
    </div>
  );
}

export default D3_News;