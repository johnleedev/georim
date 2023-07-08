import { React, useRef, useEffect, useState } from "react";
import { throttle } from "lodash";
import { motion } from "framer-motion";
import classnames from 'classnames';
import $ from 'jquery';
import '../css/Format_basic.css'
import '../css/main.css'
import forest from '../img/forest.png'
import popup1 from '../img/popup1.jpg'
import ReactPlayer from 'react-player'
import Header from '../components/Haeder'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCity, faHotel, faShop } from "@fortawesome/free-solid-svg-icons";


function Main(props) {

  // popup //
  const [showPopup, setShowPopup] = useState('');
  const HOME_VISITED = localStorage.getItem("homeVisited"); // localStorage에 homeVisited 조회
  
  useEffect(() => {
    const today = new Date();
    const handleMainPop = () => {
      if (HOME_VISITED && HOME_VISITED > today) { // 현재 date가 localStorage의 시간보다 크면 return
        return
      }
       if (!HOME_VISITED || HOME_VISITED < today) { // 저장된 date가 없거나 today보다 작다면 popup 노출
        setShowPopup('show')
      }
    };
    window.setTimeout(handleMainPop, 1000); // 1초 뒤 실행
  }, [HOME_VISITED]);

   
  return (
    <div className='main'>
      
      {/* Haeder */}
      <Header></Header>

      {/* first view --------------------------------------------------------------------------------  */}
      <section className="first" id="first">
        <div class="main_video">
          <div class="youtube_area">
            <div id="player">
              <ReactPlayer 
              className="react-player" 
              url="https://www.youtube.com/watch?v=qR6e6nERSi4" 
              width="100%" height="100%" 
              muted={true} playing={true} loop={true} showinfo='0' modestbranding={0} fs={0}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}/>
            </div>
          </div>
          <div class="youtube_cover"></div>
        </div>
        <div className="main_cover">
          <div className="main_empty"></div>
          <div className="main_notice">
            <div className="notice notice1">Development & Construction</div>
            <div className="notice notice2">프로젝트의 시작, 성공적인 마무리</div>
            <div className="notice notice3">거림이 함께합니다.</div>
          </div>
        </div>  

        {/* popup */}
        <div className={classnames('popup', showPopup)}  id="popup">
          <div className="content">
            <img src={popup1}/>
          </div>
          <div className="close">
            <div className="close_textbox">
              <div className="close_text" onClick={()=>{
                  let expires = new Date();
                  expires = expires.setHours(expires.getHours() + 24);
                  localStorage.setItem("homeVisited", expires);
                  $("#popup").fadeOut();  
                }}>24시간 동안 열지 않기</div>
            </div>
            <div className="close_button">
              <button className="close_button" onClick={()=>{
                $("#popup").fadeOut();
              }}>X</button>
            </div>
            
          </div>
        </div>

      
      </section>

      {/* second view -------------------------------------------------------------------------------- */}
    
      <section className="second">
        
        <div className="maincover">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <div className="cover ver_cover1">
            <div className="imagebox">
              <img src={forest}/>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className="cover ver_cover2">
            <div className="textbox box1">
              <div className="text text1 title">Vision</div>
            </div>
            <div className="textbox box2">
              <div className="text text1">거림은 부동산의 새로운 문화를 만들어 갑니다.</div>
              <div className="text text2">혁신은 일상에서 더 나은 미래를 만들어 가는 여정입니다.</div>
              <div className="text text2">변화와 트렌드는 한순간에 일어나지 않습니다.</div>
              <div className="text text2">매 순간의 작은 노력이 모여 창조적인 프로젝트를 만듭니다.</div>
              <div className="text text2">거림은 모두가 꿈꾸는 혁신을 만들어가겠습니다.</div>
            </div>
          </div>
          </motion.div>    
        </div>
      </section> 



      {/* third view -------------------------------------------------------------------------------- */}

      <section className="third"> 
        <div className="cover3">
          <div className="cont_box">
            <div className="cont_cov"></div>
            <div className="cont_text">
              <div className="cont_text1">
                <FontAwesomeIcon icon={faBuilding} size="3x"/>
              </div>
              <div className="cont_text2">총 분양현장</div>
              <div className="cont_text3">81<span>개</span></div>
            </div>
          </div>
          <div className="w_box none"></div>
          <div className="cont_box">
            <div className="cont_cov"></div>
            <div className="cont_text">
              <div className="cont_text1">
                <FontAwesomeIcon icon={faHotel} size="3x"/>
              </div>
              <div className="cont_text2">공동주택</div>
              <div className="cont_text3">1,501<span>세대</span></div>
            </div>
          </div>
          <div className="w_box none"></div>
          <div className="cont_box">
            <div className="cont_cov"></div>
            <div className="cont_text">
              <div className="cont_text1">
                <FontAwesomeIcon icon={faCity} size="3x"/>
              </div>
              <div className="cont_text2">오피스텔/도시형생활주택</div>
              <div className="cont_text3">13,248<span>세대</span></div>
            </div>
          </div>
          <div className="w_box none"></div>
          <div className="cont_box">
            <div className="cont_cov"></div>
            <div className="cont_text">
              <div className="cont_text1">
                <FontAwesomeIcon icon={faShop} size="3x"/>
              </div>
              <div className="cont_text2">상업시설/지식산업센터</div>
              <div className="cont_text3">1,881<span>호실</span></div>
            </div>
          </div>
        </div>
      </section> 


      
      {/* fourth view --------------------------------------------------------------------------------  */}
      <section className="fourth">
        <div className="cover4">
          <div className="contentbox box1">
            <div className="text3">개발사업부문</div>
            <div className="text4">Development</div>
            <div className="innerbox1">
              <div className="innerbox1_in">
                <div className="boxcontent">· 사업성 및 타당성 분석</div>
                <div className="boxcontent">· 개발계획 수립</div>
                <div className="boxcontent">· 자금조달 금융컨설팅</div>
                <div className="boxcontent">· 사업설계 및 인허가</div>
                <div className="boxcontent">· 시공사 선정 및 공정관리</div>
                <div className="boxcontent">· 준공 및 사업 정산 정리</div>
              </div>
            </div>
          </div>
          <div className="contentbox box2">
            <div className="text3">분양사업부문</div>
            <div className="text4">House for Installment Sale</div>
            <div className="innerbox1">
              <div className="innerbox1_in">
                <div className="boxcontent">· 부동산 시장 조사</div>
                <div className="boxcontent">· 분양 환경 분석</div>
                <div className="boxcontent">· 분양 계획</div>
                <div className="boxcontent">· 분양 결과 분석</div>
                <div className="boxcontent">· 분양 마케팅</div>
              </div>
            </div>
          </div>
          <div className="contentbox box3">
            <div className="text3">입주사업부문</div>
            <div className="text4">Moving Management</div>
            <div className="innerbox1">
              <div className="innerbox1_in">
                <div className="boxcontent">· 입주 촉진 업무</div>
                <div className="boxcontent">· 계약자 관리</div>
                <div className="boxcontent">· 임대인 알선</div>
                <div className="boxcontent">· 입주 지원 센터 운영</div>
                <div className="boxcontent">· 해약 세대 관리</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <Footer></Footer>
        </div>
      </section>

   

    </div>
    
    
  );
}




export default Main;