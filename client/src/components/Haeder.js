import { React, useState } from "react";
import './header.css'
import classnames from 'classnames';
import $ from 'jquery';

function Header () {

  const [show, setshow] = useState('')
  const [menushow, setmenushow] = useState('')

  return (
    
    <header className="header">
  
      <ul className="header_menu" onMouseLeave={()=>{setmenushow('')}}>
        <a href="/">
          <ul className="header_logo"></ul>  
        </a>
        <div className="mainmenu" id='menu_title'>
          <div className={classnames('menu_title', show)} 
            onMouseEnter={()=>{setmenushow('show')}}>
            <li className={classnames("menu_title_eg", menushow)}><a href="/info">Information</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/info">기업정보</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="/purpose">People</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/purpose">기업목표</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="/message">Principle</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/message">기업신념</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="#">Focus</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="#">기업활동</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="#">Advertisement</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="#">무료광고</a></li>
          </div>
        </div>
        <div className={classnames("submenu", menushow)}>
          <div className="submenu_title">
            <li>
              <a className={classnames("submenu_link", menushow)} href="/info">회사소개</a>
              <a className={classnames("submenu_link", menushow)} href="/organization">조직도</a>
              <a className={classnames("submenu_link", menushow)} href="/contact">오시는길</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="/purpose">인권존중</a>
              <a className={classnames("submenu_link", menushow)} href="/people">인재양성</a>
              <a className={classnames("submenu_link", menushow)} href="/charity">사회공헌</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="/message">리더메시지</a>
              <a className={classnames("submenu_link", menushow)} href="/obligation">사회적책임</a>
              <a className={classnames("submenu_link", menushow)} href="/ethics">윤리경영</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="#">개발·시행</a>
              <a className={classnames("submenu_link", menushow)} href="#">분양·입주</a>
              <a className={classnames("submenu_link", menushow)} href="#">뉴스·비디오</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="#">법인사업자</a>
              <a className={classnames("submenu_link", menushow)} href="#">개인사업자</a>
              <a className={classnames("submenu_link", menushow)} href="#">일반개인</a>
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
     

     {/* bottom_white_bar */}
     <div className="bottom_white_bar">
        <div className="bottom_white_bar_text">Development & Construction</div>
      </div>
     

    </header>


 
  );
};

export default Header;