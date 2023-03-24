import { React } from "react";
import '../css/main_1.css'
import '../css/main_2.css'
import '../css/main_3.css'
import forest2 from '../img/forest2.png'
import ReactPlayer from 'react-player'
import Header from '../components/Haeder'
import Footer from '../components/Footer'
import { motion } from "framer-motion";

function Main(props) {

 
  return (
    <div className='body'>

      {/* Haeder */}
      <Header></Header>

      {/* main back image */}
      <div className="main_back_img">
        <img src={forest2}/>
      </div>

      {/* first view */}
      <section className="first">
        <div class="main_video">
          <div class="youtube_area">
            <div id="player">
              <ReactPlayer 
              className="react-player" 
              url="https://www.youtube.com/watch?v=pKstLyMzpUc" 
              width="100%" height="100%" 
              muted={true} playing={true} loop={true} showinfo='0' modestbranding={0} fs={0}/>
            </div>
          </div>
          <div class="youtube_cover"></div>
        </div>
        <div className="main_cover">
          <div className="main_empty"></div>
          <div className="main_notice">
            <div className="notice notice1">Development & Construction</div>
            <div className="notice notice2">대한민국의 성공적인 프로젝트,</div>
            <div className="notice notice3">거림이 만들어갑니다.</div>
          </div>
        </div>  
      </section>

      {/* second view */}

     
      <section className="second">
        <div className="cover cover1">
          <div className="second_text empty"></div>
          <div className="second_text second_text1">거림의 비전</div>
          <div className="second_text second_text2">거림은 부동산 개발과 시행의 새로운 문화를 만들어 갑니다.</div>
        </div>
        <div className="cover cover2">
          <div className="second_contentbox_center">혁신은 일상에서 더 나은 미래를 만들어 가는 여정입니다.</div>
          <div className="second_contentbox_center">변화와 트렌드는 한순간에 일어나지 않습니다.</div>
          <div className="second_contentbox_center">매 순간의 작은 노력이 모여 창조적인 프로젝트를 만듭니다.</div>
          <div className="second_contentbox_center">거림은 모두가 꿈꾸는 혁신을 만들어 가겠습니다.</div>
        </div>
      </section>
      

      {/* third view */}
      <section className="third">
        <div className="cover cover1">
          <div className="third_text empty"></div>
          <div className="third_text third_text1">Business Sector</div>
          <div className="third_text third_text2">부동산 개발 시작부터 끝까지 창의적인 사고로 한발 앞서 시장을 이끌어갑니다.</div>
        </div>
        <div className="cover cover2">
          <div className="third_contentbox box1">
            <div className="third_text3">개발사업부문</div>
            <div className="third_text4">Development</div>
            <div className="third_innerbox1">
              <div className="third_innerbox1_in">
                <div className="third_boxcontent">· 사업성 및 타당성 분석</div>
                <div className="third_boxcontent">· 개발계획 수립</div>
                <div className="third_boxcontent">· 자금조달 금융컨설팅</div>
                <div className="third_boxcontent">· 사업설계 및 인허가</div>
                <div className="third_boxcontent">· 시공사 선정 및 공정관리</div>
                <div className="third_boxcontent">· 준공 및 사업 정산 정리</div>
              </div>
            </div>
            <div className="third_innerbox2"></div>
          </div>
          <div className="third_contentbox box2">
            <div className="third_text3">분양사업부문</div>
            <div className="third_text4">House for Installment Sale</div>
            <div className="third_innerbox1">
              <div className="third_innerbox1_in">
                <div className="third_boxcontent">· 부동산 시장 조사</div>
                <div className="third_boxcontent">· 분양 환경 분석</div>
                <div className="third_boxcontent">· 분양 계획</div>
                <div className="third_boxcontent">· 분양 결과 분석</div>
                <div className="third_boxcontent">· 분양 마케팅</div>
              </div>
            </div>
            <div className="third_innerbox2"></div>
          </div>
          <div className="third_contentbox box3">
            <div className="third_text3">입주사업부문</div>
            <div className="third_text4">Moving Management</div>
            <div className="third_innerbox1">
              <div className="third_innerbox1_in">
                <div className="third_boxcontent">· 입주 촉진 업무</div>
                <div className="third_boxcontent">· 계약자 관리</div>
                <div className="third_boxcontent">· 임대인 알선</div>
                <div className="third_boxcontent">· 입주 지원 센터 운영</div>
                <div className="third_boxcontent">· 해약 세대 관리</div>
              </div>
            </div>
            <div className="third_innerbox2"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}




export default Main;