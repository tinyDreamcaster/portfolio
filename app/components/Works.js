'use client'


import CreateTitlePanels from "../js/CreateTitlePanels";
import styles from "../page.module.scss";
import { useEffect, useState, useRef } from 'react';


export default function Works() {

    return (
        <section id="works" className={styles.worksSection}>
            <h2 className={styles.sectionTitle}>Работы</h2>
            <ul className={styles.workList}>
                <li data-aos="zoom-out" className={styles.workList__work}>
                    <a href="https://tinydreamcaster.github.io/RitmStyle/">
                        <p >Прототип сайта RythmStyle</p>
                    </a>
                </li>
                <li data-aos="zoom-out" className={styles.workList__work}>
                    <a href="https://tinydreamcaster.github.io/portfolioPrototype/">
                        <p >Прототип портфолио</p>
                    </a>
                </li>
                <li data-aos="zoom-out" className={styles.workList__work}>
                    <a href="https://tinydreamcaster.github.io/PCBuildCourse/">
                        <p >Прототип сайта Курсов по ПК сборке</p>
                    </a>
                </li>

            </ul>
        </section>
    )
}


