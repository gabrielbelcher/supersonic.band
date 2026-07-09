import { useContext } from 'react';
import { type ReleaseType, ReleaseContext } from '../routes/__root';
import styles from './release.module.css';

interface Params{
    mode: number
}


function ReleasePrint({song}: {song: ReleaseType}){

    const art = '/media/images/' + song.mediapath

    return (
        <div className={styles.releaseWrapper}>
            <img src={art} />

            <a href={song.url} target="_blank">
                <p>STREAM NOW</p>
            </a>
        </div>
    )
}

export default function Release({mode} : Params) {
    const releases = useContext(ReleaseContext)
    var songs: ReleaseType[] = []
    
    // 1 = Latest release
    // 2 = All releases
    if (mode == 1){
        songs.push(releases[0])
        return (
            <>
                {songs.map((song, index) => (
                    <ReleasePrint song={song} key={index}/>
                ))}
            </>
        )
    } else if(mode == 2){
        for (let i = 0; i < releases.length; i++){
            songs.push(releases[i])
        }
        return (
            <>
                {songs.map((song, index) => (
                    <ReleasePrint song={song} key={index}/>
                ))}
            </>
        )
    }
}