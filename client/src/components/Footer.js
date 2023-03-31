import React from 'react';
import './footer.css'
import title2 from '../img/title2.png'

function footer (props) {
  return (
   
    <footer className='ft'>
      <div className='ft_cov'>
               
        <div className='ft_b'>
          <div className='b_b1'>
            <div className='b_image'>
              <a href='/'>
                <img className='title' src={title2}></img>
              </a>
            </div>
          </div>
          <div className='b_b2'>
            <div className='b_b2_t1'>(주)거림</div>
            <div className='b_b2_t2'>소재지: 대구 수성구 청수로26길 46, 1004호(두산동, 엔플레이스)</div>
          </div>
          <div className='b_b2 bottom'>
            <div className='b_b2_t1'></div>
            <div className='b_b2_t2'>사업자등록번호: 409-87-00324 | 대표자 : 곽동휴</div>
          </div>
          <div className='b_b2'>
            <div className='b_b2_t1'>(주)거림개발</div>
            <div className='b_b2_t2'>소재지: 대구 수성구 청수로26길 46, 1003호(두산동, 엔플레이스)</div>
          </div>
          <div className='b_b2 bottom'>
            <div className='b_b2_t1'></div>
            <div className='b_b2_t2'>사업자등록번호: 221-88-01754 | 대표자 : 곽동휴</div>
          </div>

          <div className='b_b2'>© 2023. Co.GEORIM. All rights reserved.</div>
        </div>


        <div className='ft_b'> 
            <div className='b_b3'>
              <div className='b_b3_t1'>개발 · 분양 · 입주 문의</div>
              <a href='tel:1577-7493'>
              <div className='b_b3_t2'>1577-7493</div>
              </a>
            </div>  
            <div className='b_b4'>
              <div className='b_b4_t3'>
                <div className='b_b4_t3_t name'>상담시간</div>
                <div className='b_b4_t3_t content'>09:30 ~ 18:00</div>
              </div>
              <div className='b_b4_t3'>
                <div className='b_b4_t3_t name'>점심시간</div>
                <div className='b_b4_t3_t content'>12:00 ~ 13:00</div>
              </div>
              <div className='b_b4_t3 bottom'>
                <div className='b_b4_t3_t'>
                  <div className='name'>E-mail</div>
                  <div className='content'>georim8307@naver.com</div>
                </div>
                <div className='b_b4_t3_t'>
                  <div className='bar'>/</div>
                </div>
                <div className='b_b4_t3_t'>
                  <div className='name2'>FAX</div>
                  <div className='content'>070-8230-6989</div>
                </div>
              </div>
            </div>  
          </div>
        

      </div>
    </footer>
      
  );
}

export default footer;

