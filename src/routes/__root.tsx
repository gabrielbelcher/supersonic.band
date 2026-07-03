import { Outlet, createRootRoute } from '@tanstack/react-router';
import { createContext, useEffect, useState } from 'react';

import Footer from "../components/footer";
import Header from "../components/header";

import releasesJSON from '../assets/release-data.json';
import showsJSON from '../assets/show-data.json';


export interface ReleaseType{
    id: string;
    title: string;
    date: string;
    mediapath: string;
    url: string;
}

export interface ShowType{
  active: boolean;
  venue: string;
  address: string;
  day: string;
  month:string;
  time: string;
  url: string;
}

export const ReleaseContext = createContext<ReleaseType[]>(releasesJSON) 
export const ShowContext = createContext<ShowType[]>(showsJSON)

export const Route = createRootRoute({
  component: RootComponent,
})


function RootComponent() {
  const [releases, setReleases] = useState<ReleaseType[]>(releasesJSON);
  const [shows, setShows] = useState<ShowType[]>(showsJSON);

  useEffect(() => {
    setReleases(releasesJSON)
    setShows(showsJSON)
  })

  return (
    <>
      <Header />
        <ReleaseContext value={releases}>
          <ShowContext value={shows}>
            <Outlet />
          </ShowContext>
        </ReleaseContext>
      <Footer />
    </>
  )
}
