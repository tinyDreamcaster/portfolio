'use client'


import CreateTitlePanels from "../js/CreateTitlePanels";
import styles from "../page.module.scss";
import { useEffect, useState, useRef } from 'react';


export default function SkillList() {

    return (
        <section id="skills" className={styles.skillListSection}>
            <h2 className={styles.sectionTitle}>Навыки</h2>
            <ul className={styles.skillList}>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Библиотека React, Next js</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Препроцессоры Sass, Less, Pug</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Верстка макетов из Figma и Photoshop</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Подход к веб-разработке БЭМ</p>

                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Отзывчивая, резиновая, адаптивная верстка</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Кроссбраузерность</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Desktop/mobile first</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Pixel perfect</p>
                </li>
                <li data-aos="fade-right" className={styles.glasspanel}>
                    <div className={styles.skillList__skillImage} />
                    <p className={styles.skillList__skillDescription}>Навыки использования npm</p>
                </li>
            </ul>
        </section>
    )
}


