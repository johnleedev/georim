import { React, useState } from "react";
import './header.css'
import classnames from 'classnames';

function Header () {

  const [show, setshow] = useState('')

  return (
    
    <header className="header">

      <a href="/">
        <ul className="header_logo"></ul>  
      </a>

      <ul className="header_menu">
      
        <div className="mainmenu">
          <div className={classnames('menu_title', show)}>
            <li className="menu_title_eg"><a href="/info">Information</a></li>
            <li className="menu_title_ko"><a href="/info">기업정보</a></li>
            <li className="menu_title_eg"><a href="#">People</a></li>
            <li className="menu_title_ko"><a href="#">기업목표</a></li>
            <li className="menu_title_eg"><a href="#">Principle</a></li>
            <li className="menu_title_ko"><a href="#">기업신념</a></li>
            <li className="menu_title_eg"><a href="#">Focus</a></li>
            <li className="menu_title_ko"><a href="#">기업활동</a></li>
            <li className="menu_title_eg"><a href="#">Advertisement</a></li>
            <li className="menu_title_ko"><a href="#">무료광고</a></li>
            <li className="shownone"></li>
          </div>
        </div>
        <div className="submenu">
          <div className="submenu_title">
            <li>
              <a href="info">회사소개</a>
              <a href="organization">조직도</a>
              <a href="#">오시는길</a>
            </li>
            <li>
              <a href="#">인권존중</a>
              <a href="#">인재양성</a>
              <a href="#">사회공헌</a>
            </li>
            <li>
              <a href="#">리더메시지</a>
              <a href="#">사회적책임</a>
              <a href="#">윤리경영</a>
            </li>
            <li>
              <a href="#">개발·시행</a>
              <a href="#">분양·입주</a>
              <a href="#">뉴스·비디오</a>
            </li>
            <li>
              <a href="#">법인사업자</a>
              <a href="#">개인사업자</a>
              <a href="#">일반개인</a>
            </li>
            <li className="shownone"></li>
          </div>
        </div>
        
      </ul>


      <button className="toggle_btn" onClick={()=>{
        if (show === '') {
          console.log(show)
          setshow('show')
        } else {
          console.log(show)
          setshow('')
        }
      }}>
      <a href="#" >
        <i className="fa-solid fa-bars"></i>
      </a>
      </button>
     
     

    </header>


 
  );
};

export default Header;