import { React, useState, useEffect } from "react";
import { throttle } from "lodash";
import './header.css'
import classnames from 'classnames';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Header () {

  const [show, setshow] = useState('')
  const [menushow, setmenushow] = useState('')
  const [totopshow, settotopshow] = useState('')

  useEffect(()=>{
    window.addEventListener('scroll', throttle(function() {
      if (window.scrollY > 150) {
        settotopshow("show")
      } else if (window.scrollY < 100) {
        settotopshow('')
      }
    }), 500)

  });

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
            <li className={classnames("menu_title_eg", menushow)}><a href="/respect">People</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/respect">기업목표</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="/message">Principle</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/message">기업신념</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="/development">Focus</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/development">기업활동</a></li>
            <li className={classnames("menu_title_eg", menushow)}><a href="/addcor">Advertisement</a></li>
            <li className={classnames("menu_title_ko", menushow)}><a href="/addcor">무료광고</a></li>
          </div>
        </div>
        <div className={classnames("submenu", menushow)}>
          <div className="submenu_title">
            <li>
              <a className={classnames("submenu_link", menushow)} href="/info">회사소개</a>
              <a className={classnames("submenu_link", menushow)} href="/info">조직도</a>
              <a className={classnames("submenu_link", menushow)} href="/info">오시는길</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="/respect">인권존중</a>
              <a className={classnames("submenu_link", menushow)} href="/respect">인재양성</a>
              <a className={classnames("submenu_link", menushow)} href="/respect">사회공헌</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="/message">리더메시지</a>
              <a className={classnames("submenu_link", menushow)} href="/obligation">사회적책임</a>
              <a className={classnames("submenu_link", menushow)} href="/ethics">윤리경영</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="/development">개발·시행</a>
              <a className={classnames("submenu_link", menushow)} href="/distribution">분양·입주</a>
              <a className={classnames("submenu_link", menushow)} href="/news">뉴스·비디오</a>
            </li>
            <li>
              <a className={classnames("submenu_link", menushow)} href="/addcor">법인사업자</a>
              <a className={classnames("submenu_link", menushow)} href="/addper">개인사업자</a>
              <a className={classnames("submenu_link", menushow)} href="/addpriv">일반개인</a>
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

      {/* to-top*/}
      <div className={classnames("to_top", totopshow)} onClick={()=>{
        window.scroll({top: 0, behavior:'smooth'});
      }}>
        <FontAwesomeIcon icon={faArrowUp} className="arrow_icon"/>        
      </div>

    </header>


 
  );
};

export default Header;