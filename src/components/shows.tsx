import { useContext } from 'react';
import { ShowContext } from '../routes/__root';

import styles from './shows.module.css';

export default function Shows() {
    const shows = useContext(ShowContext)

    return (
        <div className={styles.shows}>
            {shows.length == 0 && <p>Check back for show information and tickets!</p>}

            {shows && shows.map((show, index) => (
                <div className={styles.showWrapper} key={index}>

                    <div className={styles.showLeft}>
                        <h1>{show.day}</h1>
                        <h1>{show.month}</h1>
                        <p>{show.time}</p>
                    </div>
                    <div className={styles.showCenter}>
                        <h2>{show.venue}</h2>
                        <p>{show.address}</p>
                    </div>
                    <div className={styles.showRight}>
                        {show.active && 
                            <a target='_blank' href={show.url}>GET TICKETS</a>
                        }
                    </div>

                </div>
            ))}
        </div>
    )
}