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
import news2 from '../img/news2.jpg'
import news3 from '../img/news3.jpg'
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
                희망친구 기아대책, 나비디앤씨 김기혁 대표 필란트로피클럽 278호 위촉
                </div>
                <div className="bar"></div>
                <div className="context">
                국내 최초의 국제구호개발 NGO 희망친구 기아대책이 나비디앤씨 김기혁 대표를 필란트로피클럽 278호에 위촉했다. 필란트로피클럽은 1억원 이상을 기부 또는 약정한 기아대책 후원자로 구성된 고액 후원자 모임이다.
                <br></br><br></br>김대표가 운영하는 나비디앤씨는 부동산 분양 및 개발 컨설팅 회사다. 대구 지역의 어려운 이웃을 돕고자 직원들과 함께 뜻을 모아 복지사각지대 소외계층을 위한 도시락 기부, 동절기 연탄사랑나눔, 사랑의 빵나눔, 사랑의 비누나눔 행사 등 나눔을 꾸준히 실천해 오고 있는 기업이다.
                <br></br><br></br>김 대표는 "지금 이 자리가 주변에 있는 사람들에게 귀감이 되어 선한 영향력을 끼치고 싶고, 기아대책과의 인연으로 더 많은 사람들이 선한일에 동참했으면 좋겠다"고 소감을 밝혔다.
                <br></br><br></br>희망친구 기아대책 유원식 회장은 "젊은 분들이 나눔의 길을 결정하고 삶에서 실천해 나가는 것이 존경스럽다. 아이들은 부모의 뒷모습을 보고 자란다고 한다. 김기혁 대표님의 가정이 나눔의 명문 가정이 되었으면 좋겠고, 많은 분들에게 선한 영향력을 끼치는 가정이 되길 기대한다"고 말했다.
                <br></br>...
                </div>
                <div className="link">
                  <a href="https://www.news1.kr/articles/?4600056" target='_blank'>
                  희망친구 기아대책, 나비디앤씨 김기혁 대표 필란트로피클럽 278호 위촉 - 뉴스1 (news1.kr)
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="content">
              <div className="img">
                <img src={news2}/>
              </div>
              <div className="text">
                <div className="main">
                대구사랑의열매, 나비디앤씨 김기혁 대표 아너소사이어티 가입
                </div>
                <div className="bar"></div>
                <div className="context">
                  김기혁 (주)나비디앤씨 대표는 지난 24일 권영진 대구시장, 김누리 대구사회복지공동모금회 사무처장 및 관계자들이 참석한 가운데 사회복지공동모금회의 1억 이상 개인 고액기부자 클럽인 아너 소사이어티 184호 회원에 가입했다.
                  <br></br><br></br>1982년 강원도 철원에서 태어난 김기혁 대표(40세)는 경기도 소재 경복대학교 관광학과 졸업 후 2010년부터 서울에서 부동산 분양대행 사업을 시작하여 2012년 경 대구에 정착 했다.
                  <br></br><br></br>특유의 성실함과 위기관리 능력을 바탕으로 불철주야 사업을 키우기 위해 노력해 초기 10명이었던 직원이 130여명으로 늘어났고, 분양대행에서 부동산 개발로 사업을 확장했다.
                  <br></br><br></br>대구를 사랑하고 대구를 중심으로 전국으로 사업을 확장하려는 포부를 가진 김기혁 대표는 어려운 이웃을 생각하고 그들을 돕고자 하는 마음이 깊어 회사 직원들과 함께 뜻을 모아 복지사각지대 소외계층을 위한 도시락 기부, 동절기 연탄사랑나눔, 백미나눔, 사랑의 빵나눔, 사랑의 비누나눔 행사 등 나눔을 꾸준히 실천해 왔다.
                  <br></br>...
                </div>
                <div className="link">
                  <a href="http://www.beyondpost.co.kr/view.php?ud=202106251041308077499def050a_30" target='_blank'>
                  대구사랑의열매, 나비디앤씨 김기혁 대표 아너소사이어티 가입 (beyondpost.co.kr)
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="content">
              <div className="img">
                <img src={news3}/>
              </div>
              <div className="text">
                <div className="main">
                ㈜나비디앤씨, 이웃돕기 백미 전달
                </div>
                <div className="bar"></div>
                <div className="context">
                  [일요서울 l 대구 김을규 기자] ㈜나비디앤씨(대표 김기혁)는 지난 5일 수성구청을 방문해 관내 어려운 이웃을 위해 써달라며 백미 10kg 313포(1천만원 상당)를 전달했다.
                  <br></br><br></br>이번 기부는 ㈜나비디앤씨 사회공헌 사업의 하나로 이루어졌으며 수성구청은 이번에 받은 백미를 관내 저소득 주민들에게 전달할 예정이다.
                  <br></br><br></br>김대권 수성구청장은 “관내 지역사회 소외계층에게 관심과 나눔을 실천해 줘 감사드린다”고 말했다.
                </div>
                <div className="link">
                  <a href="http://www.ilyoseoul.co.kr/news/articleView.html?idxno=345921" target='_blank'>
                    ㈜나비디앤씨, 이웃돕기 백미 전달 - 대구권 - 지자체 - 기사본문 - 일요서울i (ilyoseoul.co.kr)
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
          autoplay = {{ delay : 1000}}
          slidesPerView={perView}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{ type: "fraction"}}
          navigation={true}
          className="swiper"
        >
          <SwiperSlide className="slide">
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