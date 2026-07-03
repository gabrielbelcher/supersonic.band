import { Link } from '@tanstack/react-router';
import styles from './header.module.css';

import epk from '../assets/epk.pdf';
import logo from '../assets/logo.svg';

export default function Header() {

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeft} />

            <div className={styles.headerCenter}>
                <Link to="/">
                    <img src={logo} className={styles.logo}></img>
                </Link>
            </div>

            <div className={styles.headerRight}>
                <a href={epk} target='_blank'>EPK</a>
            </div>
        </div>
    )
}