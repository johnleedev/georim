import React from 'react';
import './footer.css'
import title2 from '../img/title2.png'

function Footer(props) {
  return (
   
    <footer className='footer'>
      <div className='cover'>

        <div className='box'> 
            <div className='box_box3'>

              <a href='tel:1577-7493'>
              <div className='box_innerbox1'>
                <div className='box_box3_text1'>고객센터</div>
                <div className='box_box3_text2'>1577-7493</div>
              </div>
              </a>
              <div className='box_innerbox2'>
                <div className='box_box3_text3'>
                  <div className='box_box3_text3_left'>평일</div>
                  <div className='box_box3_text3_right'>09:30 ~ 18:00</div>
                </div>
                <div className='box_box3_text3'>
                  <div className='box_box3_text3_left'>점심시간</div>
                  <div className='box_box3_text3_right'>12:00 ~ 13:00</div>
                </div>
                <div className='box_box3_text3'>
                  <div className='box_box3_text3_left'>E-mail</div>
                  <div className='box_box3_text3_right'>georim8307@naver.com</div>
                </div>
                <div className='box_box3_text3'>
                  <div className='box_box3_text3_left'>FAX</div>
                  <div className='box_box3_text3_right'>070-8230-6989</div>
                </div>
              </div>
            </div>
          </div>
        
        <div className='box'> 
          <div className='box_box1'>
            <div className='box_image'>
              <a href='/'>
                <img className='title' src={title2}></img>
              </a>
            </div>
          </div>
          <div className='box_box2'>
            <div className='box_box2_text1'>(주)거림</div>
            <div className='box_box2_text2'>소재지: 대구 수성구 청수로26길 46, 1004호(두산동, 엔플레이스)</div>
          </div>
          <div className='box_box2 bottom'>
            <div className='box_box2_text1'></div>
            <div className='box_box2_text2'>사업자등록번호: 409-87-00324 | 대표자 : 곽동휴</div>
          </div>
          <div className='box_box2'>
            <div className='box_box2_text1'>(주)거림개발</div>
            <div className='box_box2_text2'>소재지: 대구 수성구 청수로26길 46, 1003호(두산동, 엔플레이스)</div>
          </div>
          <div className='box_box2 bottom'>
            <div className='box_box2_text1'></div>
            <div className='box_box2_text2'>사업자등록번호: 221-88-01754 | 대표자 : 곽동휴</div>
          </div>

          <div className='box_box2'>© 2023. Co.GEORIM. All rights reserved.</div>
        </div>
        

      </div>
    </footer>
      
  );
}

export default Footer;

