import { createFileRoute } from '@tanstack/react-router'
import Release from '../components/release'
import Shows from '../components/shows'

import { useState } from 'react'
import video from '../../src/assets/hero.mov'
import styles from './index.module.css'


export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Release mode={1}/>
      </div>

      <div className={styles.video}>
        <video 
          className={`${videoLoaded && styles.loaded}`}
          src={video} 
          autoPlay loop muted
          onLoadedData={() => {
            setVideoLoaded(true);
          }}
        />
      </div>

      <div className={styles.releases}>
        <Release mode={2} />
      </div>

      <div className={styles.showsWrapper}>
        <h1>UPCOMING SHOWS</h1>
        <Shows />
      </div>
    </div>
  )
}