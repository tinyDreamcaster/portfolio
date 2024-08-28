'use client'

import Main from "./components/Main";
import SkillList from "./components/SkillList";
import CreateTitlePanels from "./js/CreateTitlePanels";
import OpenPortfolio from "./js/OpenPortfolio";
// import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import BurgerMenuShow from "./js/BurgerMenuShow";



export default function Home() {

  const [decorativePanels, setDecorativePanels] = useState([]);


  const decorativeWrapperRef = useRef(null);
  const introPanelWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const burgerNavigationRef = useRef(null);
  const burgerCloseRef = useRef(null);



  useEffect(() => {

    function ClientSizeCheck() {
      if (document.documentElement.clientWidth <= 767) {
        BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef)
      }
      else {
        BurgerMenuShow(true, burgerNavigationRef, burgerCloseRef)
      }
    }

    let decorativePanel = [];
    for (let index = 0; index < 25; index++) {
      decorativePanel.push(<li key={index} className={styles.decorativePanel} />)
    }
    setDecorativePanels(decorativePanel);

    setTimeout(() => {

      AOS.init();

    }, 500);
    
    ClientSizeCheck();

    window.addEventListener('resize', function (event) {
      ClientSizeCheck();
    }, true);


  }, []);



  return (
    <>


      <ul ref={decorativeWrapperRef} className={styles.decorativeWrapper}>
        {
          decorativePanels.map((item, index) => (
            item
          ))
        }
      </ul>

      <div ref={introPanelWrapperRef} className={styles.introPanelWrapper}>
        <div className={styles.glasspanel + ' ' + styles.introPanel}>
          <div>
            <h1 className={styles.introPanel__title}>tinyDreamCaster</h1>
            <h2 className={styles.introPanel__subtitle}>портфолио frontend-разработчика</h2>
          </div>
          <button className={styles.introPanel__button} onClick={() => {
            OpenPortfolio(
              decorativeWrapperRef,
              introPanelWrapperRef,
              containerRef
            );
            setTimeout(() => {

              AOS.refresh();

            }, 1000);
            window.scrollTo({
              top: 0,
              behavior: "instant"
            });
          }}
          >Давайте знакомиться!</button>
        </div>
      </div>

      <div ref={containerRef} className={styles.glasspanel + ' ' + styles.container}>
        <header id="main">
          <div onClick={() => {
            BurgerMenuShow(true, burgerNavigationRef, burgerCloseRef);
          }} className={styles.burgerMenu} />
          <nav onTouchMove={() => {
            BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef);
          }}
            ref={burgerNavigationRef} className={styles.navigationWrapper + ' ' + 'hide'}>
            <div ref={burgerCloseRef} onTouchStart={() => {
              BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef);
            }} />
            <ul className={styles.navigation}>
              <li onClick={() => {
                BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef);
              }}>
                <a href="#main">Главная</a>
              </li>
              <li onClick={() => {
                BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef);
              }}>
                <a href="#skills">Навыки</a>
              </li>
              <li onClick={() => {
                BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef);
              }}>
                <a href="#works">Работы</a>
              </li>
              <li onClick={() => {
                BurgerMenuShow(false, burgerNavigationRef, burgerCloseRef);
              }}>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>
        </header>

        <main >
          <Main />
          <SkillList />
          <Works />
          <Contacts />
        </main>
      </div>
      <div className='bottomPad'></div>
    </>
  );
}
