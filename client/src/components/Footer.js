import React from 'react';
import './footer.css'
import title2 from '../img/title2.png'

function Footer(props) {
  return (
   
    <footer className='footer'>
      <div className='footer_box'>
        <div className='footer_box_box1'>
          <div className='footer_box_image'>
            <a href='/'>
              <img className='footer_title' src={title2}></img>
            </a>
          </div>
        </div>
        <div className='footer_box_box2'>주소 : 대구 수성구 청수로26길 46, 10층  |  대표전화 : 0507-1332-6879 </div>
        <div className='footer_box_box2'>© 2023. Co.GEORIM. All rights reserved.</div>
      </div>
    </footer>
      
  );
}

export default Footer;

