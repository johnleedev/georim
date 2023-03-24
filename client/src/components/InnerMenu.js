import { React, useEffect }  from 'react';
import $ from 'jquery';
import './innermenu.css'

function InnerMenu(props) {

  var url = window.location.pathname;
  useEffect(()=>{
    $('.innerMenu_menu').find('a').each(function() {
      $(this).toggleClass('active', $(this).attr('href') == url)
    })
  });
 
  return (
    <div className='innerMenu'>

        <div className="innerMenu_cover cover1">
          <div className="innerMenu_titlebox">
            <div className="innerMenu_title title1">{props.title1}</div>
            <div className="innerMenu_title title2">{props.title2}</div>
          </div>
        </div>
        <ul className="innerMenu_cover cover2">
          <div className="innerMenu_menubox">
            <li className="innerMenu_menu"><a href="/info">{props.menu1}</a></li>
            <li className="innerMenu_menu"><a href="/organization">{props.menu2}</a></li>
            <li className="innerMenu_menu"><a href="#">{props.menu3}</a></li>
          </div>
        </ul>
    </div>
  );
}

export default InnerMenu;
     
