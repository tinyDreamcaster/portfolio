'use client'


import CreateTitlePanels from "../js/CreateTitlePanels";
import styles from "../page.module.scss";
import { useEffect, useState, useRef } from 'react';


export default function Contacts() {

    return (
        <section id="contacts" className={styles.contactsSection}>
            <h2 className={styles.sectionTitle}>Контакты</h2>
            <ul data-aos="fade-up" className={styles.contactList}>
                <li className={styles.contactList__contact}>
                    <p >
                        <a target="_blank" href="https://vk.com/tinydreamcaster">VK:
                            vk.com/tinydreamcaster</a>
                    </p>
                </li>
                <li className={styles.contactList__contact}>
                    <p >
                        <a target="_blank" href="https://t.me/Tinydreamcaster">Telegram:
                            @Tinydreamcaster</a>

                    </p>
                </li>
                <li className={styles.contactList__contact}>
                    <p >
                        <a target="_blank" href="mailto:m_andrew95@mail.ru">Mail: m_andrew95@mail.ru</a>
                    </p>
                </li>

            </ul>
        </section>
    )
}


