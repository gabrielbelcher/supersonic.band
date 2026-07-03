import signature from '../assets/signature.svg';
import styles from './footer.module.css';

export default function Footer() {

    return (
        <div className={styles.footerWrapper}>
            <a href="https://gabrielbelcher.com" target='_blank'>
                <img src={signature} className={styles.signature}/>
            </a>
        </div>
    )
}