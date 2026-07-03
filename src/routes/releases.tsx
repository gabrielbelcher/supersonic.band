import { createFileRoute } from '@tanstack/react-router';
import { useContext } from 'react';
import { type ReleaseType, ReleaseContext } from '../routes/__root';

import Release from '../components/release';
import styles from './releases.module.css';


export const Route = createFileRoute('/releases')({
  component: RouteComponent,
})

function RouteComponent() {
  const releases = useContext(ReleaseContext)
  

  return (
    <div className={styles.releaseWrapper}>
      { // Return all releases
        releases.map((release: ReleaseType, index: number) => {
          return <Release index={index}/>
        })
      }
    </div>
  )
}
