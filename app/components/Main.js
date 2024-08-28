'use client'

import CreateTitlePanels from "../js/CreateTitlePanels";
import styles from "../page.module.scss";
import { useEffect, useState, useRef } from 'react';


export default function Main() {

    const [titlePanels, setTitlePanels] = useState([]);

    useEffect(() => {

        setTitlePanels(CreateTitlePanels('WELCOME'));


    }, []);
    return (
        <section className={styles.mainSection}>
            <ul className={styles.title}>
                {
                    titlePanels.map((item, index) => (
                        <li key={index} className={styles.glasspanel + ' ' + styles.title__letter}>
                            {item}
                        </li>
                    ))
                }
            </ul>
            <div className={styles.glasspanel + ' ' + styles.subtitle}>
                <p >Привет, меня зовут Андрей!</p>
                <p >  Я - начинающий frontend-разработчик. </p>
                <p >  Это портфолио немного расскажет обо мне и моих навыках.
                    Буду очень рад, если смогу чем то вам помочь =) </p>
            </div>
        </section>
    )
}


